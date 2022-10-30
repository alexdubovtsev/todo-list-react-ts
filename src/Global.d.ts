declare module "*.module.css" {
  const styles: { [key: string]: string };
  export default styles;
};
declare module "*.module.scss";
// and so on for whatever flavor of css you're using