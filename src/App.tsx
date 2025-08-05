import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const Me = () => {
	return (
		<div className="space-y-3">
			<img className="h-[130px] rounded shadow-sm" src="me.png" />
			<div className="flex flex-col">
				<span className="text-[9pt] font-medium text-gray-700">
					Jackie Chan
				</span>
				<span className="text-[9pt] text-gray-500">
					Doctoral Candidate @ University of Illinois
				</span>
				<span className="text-[9pt] text-gray-500">
					jackiec1998 [at] gmail [dot] com
				</span>
			</div>
		</div>
	);
};

const MinnesotaFlag = () => (
	<a
		href="https://en.wikipedia.org/wiki/Flag_of_Minnesota"
		target="_blank"
		rel="noreferrer"
	>
		<img
			src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Minnesota.svg"
			className="h-4 rounded-sm inline mb-1 mx-1"
		/>
	</a>
);

const Header = ({ children }: { children: React.ReactNode }) => (
	<h2 className="text-md font-bold text-gray-600">{children}</h2>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
	<p className="text-[9pt] text-gray-500 leading-relaxed">{children}</p>
);

const Link = ({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) => (
	<a
		href={href}
		className="decoration-dotted underline hover:text-blue-400"
		target="_blank"
		rel="noreferrer"
	>
		{children}
	</a>
);

const HoverModal = ({ children }: { children: React.ReactNode }) => {
	// TODO: If there's not enough space to show the image above, show it to the left or right instead.
	// TODO: Include Rocky's Instagram handle in the modal.

	const [isHovered, setIsHovered] = useState(false);

	const handleTouch = () => {
		setIsHovered((prev) => !prev);
	};

	return (
		<div className="relative inline">
			<span
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onTouchStart={handleTouch}
				className="underline decoration-dotted cursor-pointer"
			>
				{children}
			</span>

			{isHovered && (
				<div className="absolute left-1/2 -translate-x-1/2 bottom-full z-1 mb-1">
					<div className="h-[150px] w-[100px]">
						<img
							src="rocky.png"
							className="h-full w-full object-cover rounded"
						/>
					</div>
				</div>
			)}
		</div>
	);
};

const About = () => {
	return (
		<article className="space-y-2">
			<Header>About</Header>
			<Paragraph>
				I'm a computer science doctoral candidate at the{" "}
				<Link href="https://siebelschool.illinois.edu/">
					University of Illinois Urbana-Champaign
				</Link>
				. I work with{" "}
				<Link href="http://www.eshwarchandrasekharan.com/">
					Dr. Eshwar Chandrasekharan
				</Link>
				, who is my advisor, studying online communities, social media
				algorithms, and content moderation.
			</Paragraph>
			<Paragraph>
				I work in a field called{" "}
				<Link href="https://en.wikipedia.org/wiki/Social_computing">
					social computing
				</Link>
				, a subfield of human-computer interaction. My research draws on a
				diverse set of skills and tools. I design user experiments, conduct
				statistical analyses, build infrastructure for large-scale data
				collection, and apply techniques from machine learning and natural
				language processing.
			</Paragraph>
			<Paragraph>
				Outside of work, I enjoy listening to music, I'm a news and political
				junkie, I enjoy reading Wikipedia, and I'm a cat dad to{" "}
				<HoverModal>Rocky</HoverModal> who I adopted during the COVID pandemic.
				I'm also a proud Minnesotan, which I thankfully call home.{" "}
				<MinnesotaFlag />
			</Paragraph>
		</article>
	);
};

const Education = () => {
	const degrees = [
		{
			school: "University of Illinois Urbana-Champaign",
			degree: "PhD",
			subject: "Computer Science",
			start: "2021",
			end: "Exp. 2026",
			img: "illinois.svg",
		},
		{
			school: "Carleton College",
			degree: "BA, Cum Laude",
			subject: "Computer Science & Mathematics",
			start: "2016",
			end: "2020",
			img: "carleton.svg",
		},
	];

	const EducationItem = ({ info }: { info: (typeof degrees)[0] }) => (
		<li className="flex items-center space-x-4">
			<img src={`/${info.img}`} className="h-10 w-10 object-contain" />
			<div>
				<div className="font-medium text-[9pt] text-gray-600">
					{info.school}
				</div>
				<div className="text-[9pt] text-gray-500">
					{info.degree} &middot; {info.subject}
				</div>
				<div className="text-[9pt] text-gray-500">
					{info.start} &ndash; {info.end}
				</div>
			</div>
		</li>
	);

	return (
		<article className="space-y-2">
			<Header>Education</Header>
			<ol className="space-y-6 mt-2">
				{degrees.map((degree, index) => (
					<EducationItem key={index} info={degree} />
				))}
			</ol>
		</article>
	);
};

const Button = ({
	label,
	icon,
	href,
}: {
	label: string;
	icon: React.ReactNode;
	href: string;
}) => (
	<a
		href={href}
		className="flex flex-row items-center space-x-1 px-2 py-0.5 border border-gray-300 rounded text-gray-600 hover:bg-gray-100 text-[9pt]"
	>
		{icon}
		<span>{label}</span>
	</a>
);

const Buttons = () => {
	const resources: {
		label: string;
		icon: React.ReactNode;
		href: string;
	}[] = [
		{
			label: "CV",
			icon: <IoDocumentText />,
			href: "Chan, Jackie - CV.pdf",
		},
		{
			label: "GitHub",
			icon: <FaGithub />,
			href: "https://github.com/jackiec1998",
		},
	];

	return (
		<div className="flex flex-wrap gap-3">
			{resources.map((resource, index) => (
				<Button {...resource} key={index} />
			))}
		</div>
	);
};

const Footer = () => (
	<div className="flex justify-center p-4 w-full border-t border-gray-200">
		<div className="flex w-[400px]">
			<Button
				label="View on GitHub"
				icon={<FaGithub />}
				href="https://github.com/jackiec1998/jackiec1998.github.io"
			/>
		</div>
	</div>
);

const App = () => {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<div className="flex flex-col items-start w-full max-w-md space-y-4 py-6 px-4">
				<Me />
				<Buttons />
				<About />
				<Education />
			</div>
			<div className="w-full">
				<Footer />
			</div>
		</div>
	);
};

export default App;
