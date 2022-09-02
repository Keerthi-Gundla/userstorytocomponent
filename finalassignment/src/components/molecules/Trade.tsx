import { Grid } from "@mui/material";
import TypographyComponent from "../atoms/Typography";
import Image from "../atoms/Image";

interface TradeProps {
  item: {
    date?: string;
    title?: string;
    subtitle?: string;
    status?: string;
    btc?: string;
  };
}

const Trade: React.FC<TradeProps> = (props) => {
  const { item } = props;
  return (
    <Grid>
      <Grid>
        <TypographyComponent>{item.date}</TypographyComponent>
      </Grid>
      <Image source="success" alt="success" />
      <Grid>
        <TypographyComponent>{item.title}</TypographyComponent>
        <TypographyComponent>{item.subtitle}</TypographyComponent>
      </Grid>
      <TypographyComponent>{item.status}</TypographyComponent>
      <Grid>
        <TypographyComponent>{item.btc}</TypographyComponent>
        <TypographyComponent>+$900</TypographyComponent>
      </Grid>
    </Grid>
  );
};

export default Trade;
