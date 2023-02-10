import PropTypes from 'prop-types';


export const Profile = ({ profile_path, name }) => {
  const profileUrl = `https://image.tmdb.org/t/p/w500/${profile_path}`;

  return (
      <div>
        <img
        width={175}
        height={250}
        src={profileUrl}
        alt={name}
        />
      </div>
  );
};


Profile.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
