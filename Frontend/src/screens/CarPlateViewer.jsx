import { Component } from 'react';
import axios from 'axios';


const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const tableStyle = {
  borderCollapse: 'collapse',
  width: '80%',
  margin: '20px auto',
  textAlign: 'left',
  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
};
const thStyle = {
  backgroundColor: '#459',
  padding: '10px',
  textTransform: 'uppercase',
  fontSize: '12px',
};

const tdStyle = {
  padding: '10px',
  borderBottom: '1px solid #e6e6e6',
};

const imgStyle = {
  width: '100px',
};
class CarPlateViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://carplate.onrender.com/data')
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  renderTable() {
    return (
      <table style={tableStyle}>
        <thead>
          <tr>
          <th style={thStyle}>Image</th>
            <th style={thStyle}>Car Plate Number</th>
            <th style={thStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((item, index) => (
            <tr key={index}>
            <td style={tdStyle}>
                <div>
                <img
  src={`data:image/jpeg;base64,${item.ImageData.data.toString('base64')}`}
  alt=''
  width="200"
  height="200"
  style={imgStyle}
/>


                </div>
                CarNumberPlate
              </td>
              <td style={tdStyle}>{item.carPlateNumber}</td>
              
              <td style={tdStyle}>{new Date(item.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div style={containerStyle}>
        {this.renderTable()}
      </div>
    );
  }
}

export default CarPlateViewer;
