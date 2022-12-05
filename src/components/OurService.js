import Table from "react-bootstrap/Table";
import BannerService from "./BannerService";
import { Card } from "antd";

const { Meta } = Card;

const OurService = ({ products }) => {
  return (
    <div className="ourService-container">
      <BannerService />
      <div className="table-price-container">
        {products?.map((product) => {
          return (
            <Card
              hoverable
              style={{
                width: 540,
              }}
              cover={<img alt="" src={product.img} style={{ height: 540 }} />}
            >
              <Meta title={product.nombre} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
