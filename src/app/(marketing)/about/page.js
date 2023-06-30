import Image from 'next/image';

export default function Home() {
  return (
    
    <main>
      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
      <div>
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="jaredduttlink" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/jaredduttlink?trk=profile-badge">Jared Dutt</a></div>
              {/* use background-image: url( '/path/image.svg' ); 
              in the CSS so that it doesn't have to be hard coded in the HTML */}
      </div>
      <div>
        <Image
          src="/images/house-icon.svg"
          height={144}
          width={144}
          alt="This house"
        />
      </div>
    </main>
  )
}