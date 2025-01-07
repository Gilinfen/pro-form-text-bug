import { ProForm, ProFormText } from "@ant-design/pro-components";

const AddAppAcc = () => {
  return (
    <ProForm>
      <ProFormText
        rules={[
          {
            required: true,
            message: "测试校验",
          },
        ]}
        name="name"
        label="测试"
      />
    </ProForm>
  );
};

export default AddAppAcc;
