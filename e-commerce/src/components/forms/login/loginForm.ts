import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
  login: string;
  password: string;
}

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").trim("Email must not contain leading or trailing whitespace").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
    .trim('Password must not contain leading or trailing whitespace')
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});














const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();
type FormData = yup.InferType<typeof schema>;

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
        
      <input {...register("age")} />
      <p>{errors.age?.message}</p>
      
      <input type="submit" />
    </form>
  );
}