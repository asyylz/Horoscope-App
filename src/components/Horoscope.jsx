export default function Horoscope({ dataArray }) {
    console.log(dataArray);
    return (
      <div className="row">
        {dataArray.map(({ id, title, desc, image, date }) => (
          <div key={id} className="col-xl-4 col-md-6  col-xs-12">
            <div className="card">
              <div className="cover item-a">
                <h3>{date}</h3>
                <h1>{title}</h1>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={image}
                  alt=""
                />
                <div className="card-back">
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  