import { Dialog, DialogContent } from '@mui/material';
import { LoginTabs } from './LoginTabs';


export const LoginModal = () => {

  return (
    <div>
      <Dialog open={false} onClose={() => { }} aria-labelledby="form-dialog-title">
        <form>
          <DialogContent>
            <LoginTabs visitorOption={false} orientation='horizontal' />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};
