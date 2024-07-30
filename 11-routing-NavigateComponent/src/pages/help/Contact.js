import { Form, redirect, useActionData } from 'react-router-dom';

export default function Contact() {
  const data = useActionData()
  return(
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method='post' action='/help/contact'>
        <label htmlFor="email">
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea type="text" name="message" required />
        </label>
        <button type="submit">Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  )
}

export const contactAction = async ({request}) => {

  const data = await request.formData()

  const submission = {
    email: data.get('email'),
    message: data.get('message')
  }

  //console.log(submission)

  // send ost request
  if(submission.message.length < 10) {
    return {error: 'Message must be over 10 chars long'}
  }

  // redirect
  return redirect('/')
}