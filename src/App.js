import './App.css';
import react, { Component } from 'react';

class App extends Component {
  state = {
    SelectedFile: null,
    FileUploadedSuccesfully: false
  }
  onFileChange= event => {
    this.setState({selectedFile: event.target.files[0]});
  }
  onFileUpload = () => {
    const formData= new FormData();
    formData.append(
      "demo file",
      this.state.selectedFile,
      this.state.selectedFile.name
    )
    //call api
    console.log(formData);
    this.setState({selectedFile: null});
    this.setState({FileUploadedSuccesfully: true});
  }

  fileData = () => {
    if(this.state.selectedFile){
      <div>
        <h2>File details:</h2>
        <p>file Name: {this.state.selectedFile.Name}</p>
        <p>File Type: {this.state.selectedFile.Type}</p>
        <p>Last Modified: {" "}
          {this.state.selectedFile.lastModifiedDate.toDateString()}
        </p>
      </div>
    } else if(this.state.FileUploadedSuccesfully){
      return(
        <div>
          <br />
          <h4>your file has been uploaded</h4>
        </div>
      )
    } else {
      return(
        <div>
          <br />
          <h4>choose a file to upload</h4>
        </div>
      )
    }
  }

  render(){
    return(
      <div className='container' href="#">
        <h2>Amneet file upload system</h2>
        <h3>File upload with react server api</h3>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            upload
          </button>
        </div>
        {this.fileData()}
      </div>
    )
  }
}
export default App;
