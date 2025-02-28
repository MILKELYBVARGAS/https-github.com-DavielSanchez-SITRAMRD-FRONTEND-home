import { useNavigate } from "react-router-dom"; // 👈 Importar useNavigate

function Auth() {
  const navigate = useNavigate(); // 👈 Hook para la redirección

  const handleLogin = async (e) => {
    e.preventDefault();
    if (validateSignIn()) {
      try {
        setToastMessage("Redireccionando a Home... ");
        setShowToast(true);

        setTimeout(() => {
          setShowToast(false);
          navigate("/home"); // 👈 Redirigir a Home
        }, 2000);
      } catch (error) {
        console.log(error);
        setToastMessage("Email o Password Incorrectos ❌");
        setShowToast(true);
      }
    }
  };

  return (
    <div>
      {/* Formulario */}
      <form onSubmit={handleLogin}>
        <Input valor={email} type="email" PlHolder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input valor={password} type="password" PlHolder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button placeholder="Login" type="submit" icon={arrow} />
      </form>
    </div>
  );
}

export default Auth;
