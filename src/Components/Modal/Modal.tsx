import { Box, Modal } from '@mui/material';
import sv from './modal.module.css';
import { FC } from 'react';
import { Istyles } from './Types';
import { style } from './utils';

interface IModalSimple {
  children: React.ReactElement;
  width?: number;
  styles?: Istyles;
}
const ModalSimple: FC<IModalSimple> = ({
  children,
  width = 600,
  styles = {
    paddingTop: '24px',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingBottom: '24px',
  },
}) => {
  return (
    <Modal
      open={true}
      hideBackdrop
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
      className={sv.modalWindow}
    >
      <Box sx={{ ...style, width }}>
        <div className={sv.modal_header}>
          <div className={sv.modal_header_box}>
            <div>Вход</div>
          </div>
        </div>
        <div style={styles}>{children}</div>
      </Box>
    </Modal>
  );
};
export default ModalSimple;
