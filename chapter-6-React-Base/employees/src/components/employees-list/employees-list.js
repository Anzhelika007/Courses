import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';



const EmployeesList = ({data}) => {

  const elements = data.map((item, i)=> {
    const {id, ...itemProps} = item;
    return (
      <EmployeesListItem key={i} {...itemProps}/>
    )
  })

  console.log(elements);

  return (
    <ul className="app-list list-group">
     {elements}
    </ul>
  )
}

export default EmployeesList;