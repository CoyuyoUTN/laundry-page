import Table from "react-bootstrap/Table";
import BannerPlancha from "./BannerPlancha";
import { Card } from "antd";

const { Meta } = Card;

const OurService = ({ products }) => {
  return (
    <div className="ourService-container">
      <BannerPlancha />
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
              <Meta title={product.nombre} style={{ fontSize: 25 }} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default OurService;
