import Button from './Button/Button';

const Main = () => {
  return (
    <main>
      <h2 className="ft-500 ft-poppins cl-gytwo">Buttons</h2>
      <div>
        <small>button</small>
        <Button text="Submit" color="default" />
        <Button text="Submit" color="primary" />
        <Button text="Submit" color="secondary" />
        <Button text="Submit" color="danger" />
      </div>
    </main>
  );
};

export default Main;
