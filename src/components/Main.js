import Button from './Button/Button';

const Main = (text) => {
  return (
    <main>
      <h2 className="ft-500 ft-poppins cl-gytwo">Buttons</h2>
      <div className="container-btn-demo">
        <div className="item-demo">
          <small>{(text = '<Button />')}</small>
          <Button />
        </div>
        <div className="item-demo">
          <small className="cl-hover">{(text = '&:hover, &:focus')}</small>
          <Button demohover="hovdef" />
        </div>
      </div>
      <div className="container-btn-demo">
        <div className="item-demo">
          <small>{(text = '<Button variant=”outline” />')}</small>
          <Button variant="outline" color="primary" />
        </div>
        <div className="item-demo">
          <small className="cl-hover">{(text = '&:hover, &:focus')}</small>
          <Button variant="outline" color="primary" demohover="hovout" />
        </div>
      </div>
      <div className="container-btn-demo">
        <div className="item-demo">
          <small>{(text = '<Button variant=”text” />')}</small>
          <Button variant="text" color="primary" />
        </div>
        <div className="item-demo">
          <small className="cl-hover">{(text = '&:hover, &:focus')}</small>
          <Button variant="text" color="primary" demohover="hovtex" />
        </div>
      </div>
      <div className="container-btn-demo">
        <div className="item-demo">
          <small>{(text = '<Button disableShadow />')}</small>
          <Button color="primary" disableShadow />
        </div>
      </div>
      <div className="container-btn-demo">
        <div className="item-demo">
          <small>{(text = '<Button disabled />')}</small>
          <Button disabled />
        </div>
        <div className="item-demo">
          <small>{(text = '<Button varian="text" disabled />')}</small>
          <Button variant="text" disabled />
        </div>
      </div>
      <div className="container-btn-demo">
        <div className="item-demo">
          <small>{(text = '<Button startIcon=”local_grocery_store” />')}</small>
          <Button
            color="primary"
            startIcon={<i class="fas fa-cart-plus"></i>}
          />
        </div>
        <div className="item-demo">
          <small>{(text = '<Button endIcon=”local_grocery_store” />')}</small>
          <Button color="primary" endIcon={<i class="fas fa-cart-plus"></i>} />
        </div>
      </div>
      <div className="container-btn-demo">
        <div className="item-demo">
          <small>{(text = '<Button size=”sm” />')}</small>
          <Button color="primary" size="sm" />
        </div>
        <div className="item-demo">
          <small>{(text = '<Button size=”md” />')}</small>
          <Button color="primary" size="md" />
        </div>
        <div className="item-demo">
          <small>{(text = '<Button size=”lg” />')}</small>
          <Button color="primary" size="lg" />
        </div>
      </div>
      <div className="container-btn-demo">
        <div className="item-demo">
          <small>{(text = '<Button color=”default” />')}</small>
          <Button color="default" />
        </div>
        <div className="item-demo">
          <small>{(text = '<Button color=”primary” />')}</small>
          <Button color="primary" />
        </div>
        <div className="item-demo">
          <small>{(text = '<Button color=”secondary” />')}</small>
          <Button color="secondary" />
        </div>
        <div className="item-demo">
          <small>{(text = '<Button color=”danger” />')}</small>
          <Button color="danger" />
        </div>
      </div>
      <div className="flex column">
        <small className="cl-hover">{(text = '&:hover, &:focus')}</small>
        <div className="container-btn-demo">
          <div className="item-demo">
            <Button color="default" demohover="hovdef" />
          </div>
          <div className="item-demo">
            <Button color="primary" demohover="hovpri" />
          </div>
          <div className="item-demo">
            <Button color="secondary" demohover="hovsec" />
          </div>
          <div className="item-demo">
            <Button color="danger" demohover="hovdag" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
