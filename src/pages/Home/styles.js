const styles = {
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
    display: 'flex',
  },
  titleTableSeller: {
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  firstTitleTableSeller: {
    backgroundColor: '#f4f4f4',
    paddingLeft: 32,
    color: 'rgba(0, 0, 0, 0.87)',
    fontWeight: 500,
    lineHeight: '1.5rem',
  },
  firstColumnTableSeller: {
    paddingLeft: 32,
  },
  bodyTableSeller: {
    textAlign: 'center',
    // width: 78,
    height: 18,
    fontSize: 13,
    textAlign: 'center',
    color: '#404040',
  },
  paginator: {
    display: 'flex',
    justifyContent: 'center',
    color: '#0086ff',
    disabled: {
      color: '#0086ff',
      borderColor: '#ddd',
    },
  },
  pagination: {
    color: '#0086ff',
    border: 'solid 1px #e5e5e5',
    display: 'inline-block',
    textAlign: 'center',
    padding: 5,
    margin: '20 0',
    fontSize: 14,
    borderRadius: 4,
    disabled: {
      linkDisabled: {
        color: '#777',
        borderColor: '#ddd',
        cursor: 'not-allowed',
      },
    },
    active: {
      linkActive: {
        zIndex: 3,
        color: '#00a9d7',
        backgroundColor: '#f5f5f5',
        borderColor: '#d6d6d6',
        cursor: 'default',
      },
    },
    li: {
      display: 'inline',
      '&:first-child': {
        linkFirstChild: {
          marginLeft: 0,
          borderBottomLeftRadius: 4,
          borderTopLeftRadius: 4,
        },
      },
      '&:last-child': {
        linkLastChild: {
          borderBottomRightRadius: 4,
          borderTopRightRadius: 4,
        },
      },
      linkLi: {
        position: 'relative',
        float: 'left',
        padding: '6 12',
        lineheight: '1.4385',
        textDecoration: 'none',
        border: '1px solid #ddd',
        backgroundColor: '#fff',
        color: '#00b1e1',
        marginLeft: -1,
      },
    },
  },
  actions: {
    active: { color: '#0086ff' },
  },
};

export default styles;
