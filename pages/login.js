import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export default function Login() {
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();

    // LÓGICA DE AUTENTICAÇÃO
    /*
      1. Verificar os dados
      2. Enviar requisição pro backend
      3. esperar a resposta
       3.1 se existir erro, alertar ao usuario
       3.2 se a req. estiver ok, salvar o token e ir para a prox. pagina
     */

    router.push("/categorias");
  }

  return (
    <Container className="p-5">
      <Card>
        <Form onSubmit={handleLogin}>
          <h1 className="text-center">Login</h1>
          <Form.Group className="p-2">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Insira seu e-mail"
              required
            />
          </Form.Group>
          <Form.Group className="p-2">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Insira sua senha"
              required
              minlength={8}
            />
          </Form.Group>
          <Form.Group className="p-3 text-center">
            <Button className="m-3" type="submit">
              Entrar
            </Button>
            <br />
            <Link href="/nova-conta">
              <a>Crie uma nova conta</a>
            </Link>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
}
