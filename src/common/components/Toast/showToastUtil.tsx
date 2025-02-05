import { toast, ToastOptions } from 'react-toastify';

import { SixIcon } from '@six-group/ui-library-react/dist';

import { SizeEnum } from 'common/utils/enums';

import './Toast.scss';

const coloredTheme: ToastOptions = {
  theme: 'colored',
};

const getContent = (title?: string, body?: string | JSX.Element) => {
  return (
    <div>
      {title && <div className="title">{title}</div>}
      {body && <div className="body">{body}</div>}
    </div>
  );
};

export const showSuccess = (title: string, body: string, config: ToastOptions = {}) => {
  const content = getContent(title, body);
  toast.success(content, {
    ...coloredTheme,
    icon: (
      <SixIcon size={SizeEnum.medium} aria-label="Success" className="image-icon success">
        check
      </SixIcon>
    ),
    bodyClassName: 'toastbody',
    ...config,
  });
};

export const showError = (title: string, body: string, config: ToastOptions = {}) => {
  const content = getContent(title, body);
  toast.error(content, {
    ...coloredTheme,
    icon: (
      <SixIcon size={SizeEnum.medium} aria-label="Error" className="image-icon error">
        warning
      </SixIcon>
    ),
    bodyClassName: 'toastbody',
    ...config,
  });
};

export const showInformation = (title: string, body: string, config: ToastOptions = {}) => {
  const content = getContent(title, body);
  toast.info(content, {
    ...coloredTheme,
    icon: (
      <SixIcon size={SizeEnum.medium} aria-label="Information" className="image-icon information">
        feedback
      </SixIcon>
    ),
    bodyClassName: 'toastbody',
    ...config,
  });
};
