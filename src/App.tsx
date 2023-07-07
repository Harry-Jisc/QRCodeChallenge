import QRCode from './components/QRCode';

function App() {
  return (
    <div className="App">
      <QRCode 
        title='Improve your front-end skills by building projects' 
        tagline='Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level ' 
        link='https://www.google.com'
      />
    </div>
  );
}

export default App;
