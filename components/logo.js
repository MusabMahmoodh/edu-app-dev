import { jsx, Image, Text } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        cursor: "pointer",
        mr: 15,
        textDecoration: "none",
        color: "success",
        fontSize: [3, 4],
      }}
      {...rest}>
      <Text>AppName</Text>

      {/* <Image src={src} /> */}
    </Link>
  );
}
