import { Outlet } from "react-router-dom"

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia reiciendis, odio assumenda dolorum inventore molestias qui voluptates enim cupiditate.</p>

      <Outlet />
    </div>

  )
}