import { SixErrorPage } from '@six-group/ui-library-react/dist';

const customDescription = [
  'We have not found the page you requested.',
  'Please click the back button to move back',
];

const NotFoundPage = () => {
  return (
    <div style={{ fontSize: '0.875rem' }} aria-label="Page Not Found">
      <SixErrorPage error-code="404" language="en" customDescription={customDescription} />
    </div>
  );
};

export default NotFoundPage;
