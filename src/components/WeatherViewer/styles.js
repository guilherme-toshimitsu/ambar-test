const styles = theme => ({
  paper: {
    height: 400,
    width: 600,
    margin: 'auto',
    padding: '20px 20px 20px 20px',
  },
  loadingRoot: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
  },
  cardData: {
    width: '100%',
  },
  actionContainer: {
    display: 'flex',
    width: '100%',
    height: 250,
  },
  iconContainer: {
    display: 'flex',
    width: '50%',
    height: 250,
    alignItems: 'flex-end',
  },
  icon: {
    height: 80,
    width: 80,
  },
  buttonContainer: {
    width: '50%',
    height: 250,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default styles;
