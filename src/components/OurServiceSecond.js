import Table from "react-bootstrap/Table";
import BannerPlancha from "./BannerPlancha";
import { Card } from "antd";

const { Meta } = Card;

const OurService = ({ products }) => {
  return (
    <div className="ourService-container">
      <BannerPlancha />
      <div className="table-price-container">
        {/*<Table
          striped
          bordered
          hover
          variant="primary"
          size="sm"
          responsive
          id="g-table"
        >
          <thead>
            <tr class="espacio">
              <th>Servicio</th>
              <th>Precio al contado</th>
            </tr>
          </thead>
          {products?.map((product) => {
            return (
              <tbody>
                <tr class="espacio">
                  <td>{product.nombre}</td>
                  <td>$ {product.precio}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>*/}
        {products?.map((product) => {
          return (
            <Card
              hoverable
              style={{
                width: 540,
              }}
              cover={<img alt="" src={product.img} style={{ height: 540 }} />}
            >
              <Meta
                title={product.nombre}
                description={"$" + product.precio}
                style={{ fontSize: 25 }}
              />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
