'use client';

import Image from 'next/image';

const Avatar = () => {
	return (
		<div>
			<Image
				alt='Avatar'
				className='rounded-full'
				height='30'
				width='30'
				src='/Images/avatar.jpg'
			/>
		</div>
	);
};

export default Avatar;
