export default function Contact() {
  return(
    <div className="contact">
      <h3>Contact Us</h3>
      <form>
        <label htmlFor="email">
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea type="text" name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}