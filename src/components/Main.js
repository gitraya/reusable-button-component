import { FaBeer } from 'react-icons/fa';
import Button from './Button/Button';

const Main = () => {
  return (
    <main>
      <h2 className="ft-500 ft-poppins cl-gytwo">Buttons</h2>
      <div>
        <small>button</small>
        <Button text="Submit" color="default" disableShadow />
        <Button text="Submit" color="primary" />
        <Button text="Submit" color="secondary" />
        <Button text="Submit" color="danger" variant="outline" />
      </div>
      <div>
        <Button text="Submit" color="secondary" variant="text" />
      </div>
      <div>
        <Button startIcon={<FaBeer />} />
      </div>
    </main>
  );
};

export default Main;
