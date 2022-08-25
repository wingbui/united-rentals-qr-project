import styled from "@emotion/styled";
import { QRReader } from "./pages/qrReader/QRReader";

function App() {
  return (
    <AppContainer>
      <QRReader />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 1224px;
  margin: auto;
  padding: 1rem;
`;

export default App;
