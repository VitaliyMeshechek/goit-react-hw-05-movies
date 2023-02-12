import PropTypes from 'prop-types';


  const Profile = ({ profile_path, name }) => {
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

export default Profile;

Profile.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
};
