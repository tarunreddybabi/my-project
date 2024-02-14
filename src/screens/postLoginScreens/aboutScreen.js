import NavBar from "../../components/navBar/navBar";



const AboutScreen = () => {
 

  return (
    <>
      <NavBar />
     
      
        <h2>You're at About screen</h2>
       
        <form action="/action_page.php">
          <div className="mb-3 mt-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
            />
          </div>
          <div className="form-check mb-3">
            <label htmlFor="comment">Comments:</label>
            <textarea
              className="form-control"
              rows="5"
              id="comment1"
              name="text1"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      
    </>
  );
};

export default AboutScreen;
