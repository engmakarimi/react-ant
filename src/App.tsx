import { Button, Card, ConfigProvider, InputNumber, Popover } from "antd";
import { Theme } from "antd/lib/config-provider/context";
import "./App.css";

const App = () => {
 const  changeTheme= ()=>{
   console.log('theme change click');
  const mergedNextColor:Theme={
    primaryColor: '#yellow',
    infoColor:'red ',
    successColor: 'orange',
    processingColor: '#747474',
    errorColor: 'green',
    warningColor: 'blue',
  };
  ConfigProvider.config({
    theme: mergedNextColor,
  });
 }
  function onChange(value: number) {
    console.log("changed", value);
  }

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
  return (
    <ConfigProvider>
      <Button type="primary" onClick={changeTheme}>click</Button>
      <br />
      test <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
      <br />
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
      
    </ConfigProvider>
  );
};

export default App;
