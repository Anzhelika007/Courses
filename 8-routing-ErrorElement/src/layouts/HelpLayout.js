import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return(
    <div className="help-layout">
      <h2>Help Layout</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos nihil vitae ducimus tempora delectus, ratione, totam ea quasi odit dolor autem non recusandae doloribus. Voluptas a deleniti eos consequuntur obcaecati?</p>

      <nav>
        <NavLink to='faq'>View the FAQ</NavLink>
        <NavLink to='contact'>Contact US</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}