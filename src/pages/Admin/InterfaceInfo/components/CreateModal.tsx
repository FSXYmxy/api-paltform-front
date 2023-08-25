import '@umijs/max';
import {ProColumns, ProTable} from "@ant-design/pro-components";
import {Modal} from "antd";

export type Props = {
  columns: ProColumns<API.InterfaceInfoVO>[];
  onCancel: () => void;
  onSubmit: (values: API.InterfaceInfoVO) => Promise<void>;
  visible: boolean;
};
const CreateModal: React.FC<Props> = (props) => {
  const { visible, columns, onCancel, onSubmit } = props;

  return (
    <Modal open={visible} footer={null} onCancel={() => onCancel?.()}>
      <ProTable type={'form'}
                columns={columns}
                onSubmit={async (value) => {
                  onSubmit?.(value)
                }} />
    </Modal>
  );
};
export default CreateModal;
