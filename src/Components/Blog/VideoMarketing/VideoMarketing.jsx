import { Link } from "react-router-dom"
import { assets } from "../../../assets/asset"
import styles from "./VideoMarketing.module.css"

const VideoMarketing = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<img
					src={assets.blog_bg3}
					alt="blog"
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.socialMediaPower}>
					<h1>
						The Power of Social Media Marketing: Why Your Business Needs It
					</h1>
					<p>
						Social media marketing is becoming a need rather than a luxury for
						companies hoping to succeed in the current digital era. Being one of
						the top social media marketing company in Australia, C9 ADS is aware
						of the revolutionary potential of social media marketing and how it
						can take your company to new heights. Whether your company is new or
						well-established, using social media to its full potential can have
						a big impact on its development and success.
					</p>
				</div>
				<div className={styles.essential}>
					<h2>Why Social Media Marketing is Essential :-</h2>
					<p>
						<span>Enhanced Brand Awareness</span> <br />
						The capacity of social media marketing to raise brand awareness is
						among its most important benefits. Social media platforms such as
						Facebook, Instagram, Twitter, and LinkedIn provide businesses with a
						wide audience to reach. You may improve your brand's recall and
						recognition by regularly posting interesting material and
						communicating with your audience. C9 ADS, an Australian-based social
						media marketing company, can assist in creating strategies that will
						increase your brand's visibility on these networks.
					</p>
					<p>
						<span>Cost-Effective Marketing</span>
						<br /> Social media marketing is much less expensive than
						traditional marketing techniques. Major social media networks allow
						you to create a profile for free, and paid options for advertising
						are frequently more cost-effective and focused than traditional
						channels. A systematic approach can help businesses accomplish big
						goals without going over budget
					</p>
					<p>
						<span>Improved Customer Engagement</span> <br />
						Social media platforms offer businesses a special chance to interact
						directly with their customers. You can strengthen your audience
						relationships and create a community around your brand by responding
						to messages, likes, shares, and comments. In addition to increasing
						customer loyalty, this interaction offers insightful data on the
						tastes and actions of the target audience.
					</p>
					<p>
						<span>Increased Website Traffic and SEO</span>
						<br /> Social media marketing has the potential to increase website
						traffic significantly. You can draw customers who are interested in
						what you have to offer by advertising blog entries, goods, or
						services and sharing links to the information on your website.
						Furthermore, social media engagement can improve your search engine
						rankings because search engines take social signals into account
						when assigning ranks.
					</p>
					<p>
						<span>Targeted Advertising</span> <br /> Social media networks are
						notable for their sophisticated targeting tools. Businesses may
						provide highly targeted advertisements based on demographics,
						interests, habits, and even location by utilizing platforms such as
						Facebook and Instagram. This makes sure that the proper people are
						the target audience for your marketing activities, increasing the
						efficacy of your campaigns.
					</p>
					<p>
						<span>Real-Time Performance Analysis</span> <br /> Social networking
						sites have powerful analytics capabilities that provide you
						instantaneous information into how well your efforts are performing.
						You can monitor metrics like interaction, reach, conversions, and
						more using these tools. You may make well-informed judgments and
						consistently improve your social media strategy for better outcomes
						by studying this data.
					</p>
				</div>
				<div className={styles.chooseC9}>
					<h2>Why Choose C9 ADS for Your Social Media Marketing Needs</h2>
					<p>
						C9 ADS, a leading social media marketing company in Australia, is
						dedicated to assisting companies in realizing the benefits of social
						media marketing. Here are some reasons why working with us can be
						beneficial:
					</p>
				</div>
				<div className={styles.c9help2}>
					<p>
						<span>Expertise and Experience:</span> With years of expertise, our
						team of social media specialists has created and implemented
						effective social media strategies for a wide variety of companies.
					</p>
					<p>
						<span> Tailored Strategies:</span> With years of expertise, our team
						of social media specialists has created and implemented effective
						social media strategies for a wide variety of companies.
					</p>
					<p>
						<span> Comprehensive Services:</span> We provide a comprehensive
						range of social media marketing services, from paid advertising and
						analytics to content production and administration.
					</p>
					<p>
						<span> Proven Results:</span> Our history of producing noticeable
						outcomes is self-evident. We have aided many Australian businesses,
						both in Sydney and beyond, in achieving their social media marketing
						goals.
					</p>
					<p>
						In summary, social media marketing is an effective strategy that can
						boost your company's growth, engagement, and brand recognition. You
						may fully utilize social media to accomplish your business
						objectives by working with a reputable social media marketing
						company in Sydney, such as C9 ADS. To find out more about how we can
						support your success in the digital world, get in touch with us
						right now.
					</p>
				</div>
			</div>
			<button className={styles.contactButton}>
				<Link to={"/contact"}>Contact</Link>
			</button>
		</div>
	)
}

export default VideoMarketing
