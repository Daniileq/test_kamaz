export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '14px',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: '0px 4px 8px rgb(57, 57, 66, 0.16)',
  borderRadius: '12px',
};
export const getUser = () => localStorage.getItem('user');
