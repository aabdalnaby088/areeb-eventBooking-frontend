import FormSignup from "../components/FormSignup";

export default function Signup
() {
  return (
    <div
    style={{
          background: "linear-gradient(263deg, #44539C 0.93%, #1D2134 172.12%)",
        }}
     className='flex flex-col justify-center items-center py-10 h-[100vh]'>
      <FormSignup/>
    </div>
  )
}
