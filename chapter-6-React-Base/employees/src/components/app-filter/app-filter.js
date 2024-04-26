import './app-filter.css';

const AppFilter = (props) => {

  const buttonsData = [
    {name: 'all', label: 'Все сотрудники', colored: false},
    {name: 'rise', label: 'На повышение', colored: false},
    {name: 'moreThen1000', label: 'З/П больше 1000$', colored: true},
  ];

  const buttons = buttonsData.map(({name, label, colored}) => {
    const active = props.filter === name;
    const styleBtn = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button 
        className={`btn ${styleBtn}`}
        type='button'
        key={name}
        onClick={() => props.onFilterSelect(name)}
        style={colored ? {color: 'red'} : null}>
          {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default AppFilter;