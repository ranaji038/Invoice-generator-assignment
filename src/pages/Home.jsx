import React from "react";
import { Button, Card, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useInvoiceListData } from "../redux/Invoicehooks";
import InvoiceRow from "../components/InvoiceRow";

const InvoiceList = () => {
  const { invoiceList } = useInvoiceListData();
  const isListEmpty = invoiceList.length === 0;
  const navigate = useNavigate();

  return (
    <Row>
      <Col className="mx-auto" xs={12} md={8} lg={9}>
        <Card className="d-flex p-3 p-md-4 my-3 my-md-4 ">
          {isListEmpty ? (
            <div className="d-flex flex-column align-items-center">
              <h3 className="fw-bold pb-2 pb-md-4">No Invoice Added Yet</h3>
              <h7 className=" pb-2 pb-md-4">Try Creating some</h7>
              <Link to="/create">
                <Button variant="primary">Create Invoice</Button>
              </Link>
            </div>
          ) : (
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-between align-items-center ">
                <h3 className="fw-bold pb-2 pb-md-4">Invoice List</h3>
                <Link to="/create">
                  <Button variant="primary mb-2 mb-md-4">Create New Invoice</Button>
                </Link>
              </div>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Invoice No.</th>
                    <th>Bill To</th>
                    <th>Bill From</th>
                    <th>Invoice Amount</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {invoiceList.map((invoice) => (
                    <InvoiceRow
                      key={invoice.id}
                      invoice={invoice}
                      navigate={navigate}
                    />
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card>
      </Col>
    </Row>
  );
};


export default InvoiceList;
