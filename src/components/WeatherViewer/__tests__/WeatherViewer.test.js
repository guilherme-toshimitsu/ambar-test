import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { render, fireEvent } from '@testing-library/react';
import { createMuiTheme } from '@material-ui/core';
import WeatherViewer from '../';

describe('<WeatherViewer> Route Component Loader', () => {
  it('renders default loading', () => {
    const component = render(<WeatherViewer />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders without icon', () => {
    const component = render(<WeatherViewer main={{ temp_min: 0, temp_max: 99 }} weather={[]} />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders with icon but not parsable', () => {
    const component = render(<WeatherViewer main={{ temp_min: 0, temp_max: 99 }} weather={[{ icon: 'bla' }]} />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders with icon png', () => {
    const component = render(<WeatherViewer main={{ temp_min: 0, temp_max: 99 }} weather={[{ icon: 'bla.png' }]} />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders with icon jpg', () => {
    const component = render(<WeatherViewer main={{ temp_min: 0, temp_max: 99 }} weather={[{ icon: 'bla.jpg' }]} />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders and clickButton', () => {
    const component = render(
      <ThemeProvider theme={createMuiTheme({})}>
        <WeatherViewer
          main={{ temp_min: 0, temp_max: 99 }}
          weather={[{ icon: 'bla.jpg' }]}
          history={{ push: () => {} }}
        />
      </ThemeProvider>
    );
    const button = component.getByTestId('go-to-temperature');
    fireEvent.click(button);
  });
});
