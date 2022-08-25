import QrReader from "react-qr-reader";

import { PageHeading } from "../../components/pageHeading/PageHeading";

export const QRReader = () => {
  const handleScan = (data: string | null) => {};
  const handleError = (err: any) => {};

  return (
    <>
      <PageHeading>QR Scanner</PageHeading>
      <div>
        <QrReader onError={handleError} onScan={handleScan} />
      </div>
    </>
  );
};
