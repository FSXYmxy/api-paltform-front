import {
  getInterfaceInfoVOByIdUsingGET,
  invokeInterfaceInfoUsingPOST,
} from '@/services/api-platform-backend/interfaceInfoController';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Card, Descriptions, Divider, Form, Input, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API.InterfaceInfoVO>();
  const params = useParams();
  const [invokeRes, setInvokeRes] = useState<any>();
  const [invokeLoading, setInvokeLoading] = useState(false);

  const loadData = async () => {
    if (!params.id) {
      message.error('参数不存在');
      return;
    }
    setLoading(true);
    try {
      const res = await getInterfaceInfoVOByIdUsingGET({
        id: String(params.id),
      });

      setData(res.data);
    } catch (error: any) {
      message.error('请求失败' + error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const onFinish = async (values: any) => {
    if (!params.id) {
      message.error('接口不存在');
      return;
    }
    setInvokeLoading(true);
    try {
      const res = await invokeInterfaceInfoUsingPOST({
        id: params.id,
        ...values,
      });
      setInvokeRes(res.data);
      message.success('请求成功');
    } catch (error: any) {
      message.error('操作失败，' + error.message);
    }
    setInvokeLoading(false);
  };

  // /**
  //  * 尝试将输入框中的内容转换成参数
  //  * @param values
  //  */
  // const transformInput = async (values: any) => {
  //   let record = JSON.parse(values);
  //   console.log('begin');
  //
  //   console.log(record);
  //
  //   console.log('end');
  //   return record;
  // };

  return (
    <PageContainer title={data?.name}>
      <Card>
        {data ? (
          <Descriptions column={1} bordered>
            <Descriptions.Item label="接口状态">{data.status ? '开启' : '关闭'}</Descriptions.Item>
            <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
            <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
            <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
            <Descriptions.Item label="请求参数">{data.requestParams}</Descriptions.Item>
            <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
            <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
            <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
            <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
          </Descriptions>
        ) : (
          <>接口不存在</>
        )}
      </Card>
      <Divider />
      <Card>
        <Form name="invoke" layout={'vertical'} onFinish={onFinish}>
          <Form.Item label="请求参数" name="params" id="params">
            <Input.TextArea value={data?.requestParams} id="text" />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }} id="submit">
            <Button type="primary" htmlType="submit">
              调用
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Divider />
      <Card title="返回结果" loading={invokeLoading}>
        {invokeRes}
      </Card>
    </PageContainer>
  );
};

export default Index;
