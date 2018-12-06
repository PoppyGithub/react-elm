import createHashHistory from 'history/createHashHistory';

const History = createHashHistory();

History.listen(location => {
  document.getElementById('root').scrollTop = 0;
});

export default History;
