import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={stylesLayout.pin_container}>
      <br/>
      <br/>
      <br/>
      
      <PinCard size='small' image='https://picsum.photos//300/450'  />
      <PinCard size='medium'image='https://picsum.photos//300/450'/>
      <PinCard size='large' image='https://picsum.photos//300/450' />
      <PinCard size='small' image='https://picsum.photos//300/450' />
      <PinCard size='medium' image='https://picsum.photos//300/450'/>
      <PinCard size='large' image='https://picsum.photos//300/450'/>
      <PinCard size='small' image='https://picsum.photos//300/450'/>
      <PinCard size='medium' image='https://picsum.photos//300/450'/>
      <PinCard size='large' image='https://picsum.photos//300/450'/>
      <PinCard size='small' image='https://picsum.photos//300/450'/>
      <PinCard size='medium' image='https://picsum.photos//300/450'/>
      <PinCard size='large' image='https://picsum.photos//300/450'/>
      <PinCard size='small' image='https://picsum.photos//300/450'/>
      <PinCard size='medium' image='https://picsum.photos//300/450'/>
      <PinCard size='large' image='https://picsum.photos//300/450'/>
      <PinCard size='small' image='https://picsum.photos//300/450'/>
      <PinCard size='medium' image='https://picsum.photos//300/450'/>
      <PinCard size='large' image='https://picsum.photos//300/450'><button>holi</button>
      </PinCard>
    </div>
  );
};

const stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
    
  },
  
};

export default PinterestLayout;
