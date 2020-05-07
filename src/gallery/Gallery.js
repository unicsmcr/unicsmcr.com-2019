import React from 'react';
import guh_2019 from '../assets/gallery/guh_2019.jpg';
import sh_2019 from '../assets/gallery/sh_2019.jpg';
import guh_2018 from '../assets/gallery/guh_2018.jpg';
import sh_2018 from '../assets/gallery/sh_2018.jpg';
import guh_2017 from '../assets/gallery/guh_2017.jpg';
import sh_2017 from '../assets/gallery/sh_2017.jpg';
import guh_2016 from '../assets/gallery/guh_2016.jpg';
import sh_2016 from '../assets/gallery/sh_2016.jpg';
import '../font.css';
import './Gallery.css';

const folders = [
  {
    name: 'GUH 2019',
    url: 'https://photos.app.goo.gl/somDmHysCtb8Srv56',
    thumbnail: guh_2019,
  },
  {
    name: 'Student Hack 2019',
    url: 'https://photos.app.goo.gl/VKvr8sp6R8A67XaGA',
    thumbnail: sh_2019,
  },
  {
    name: 'GUH 2018',
    url: 'https://photos.app.goo.gl/Z4vNwDh31rD7Efap6',
    thumbnail: guh_2018,
  },
  {
    name: 'Student Hack 2018',
    url: 'https://photos.app.goo.gl/eWSmdk3UCRAurAYu8',
    thumbnail: sh_2018,
  },
  {
    name: 'GUH 2017',
    url: 'https://photos.app.goo.gl/HyHq3jdbm2yettQT9',
    thumbnail: guh_2017,
  },
  {
    name: 'Student Hack 2017',
    url: 'https://photos.app.goo.gl/uL5y7uV8dwXQNDLR8',
    thumbnail: sh_2017,
  },
  {
    name: 'GUH 2016',
    url: ' https://photos.app.goo.gl/PTM3QBV5cfrYkzWh9',
    thumbnail: guh_2016,
  },
  {
    name: 'Student Hack 2016',
    url: 'https://photos.app.goo.gl/T5j13oABy2WDomai7',
    thumbnail: sh_2016,
  },
];
export default class Home extends React.Component {
  makeThumbnail = (array) => {
    if (array.length > 0) {
      return array.map(function (each, idx) {
        return (
          <div key={idx}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={each.url}
              className="grid-link-gallery"
            >
              <img
                className="grid-item-gallery rounded"
                src={each.thumbnail}
                alt="Gallery Folder"
              />
            </a>
            <div className="gallery-caption">
              <h4>{each.name}</h4>
            </div>
          </div>
        );
      });
    } else {
      return [];
    }
  };

  render() {
    return (
      <div>
        <hr />
        <h1 style={{ textAlign: 'center' }} className="display-4">
          Gallery Page
        </h1>
        <hr />
        <div className="grid-container-gallery">
          {this.makeThumbnail(folders)}
        </div>
      </div>
    );
  }
}
