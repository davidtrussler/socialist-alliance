const Vue = require('vue'); 

const createSSRApp = function() {
	return Vue.createSSRApp({
		template: `
			<!DOCTYPE html>
			<html lang="en-GB">
				<head>
					<title>Socialist Alliance | Home</title>
					<meta charset="utf-8"/>
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<link rel="stylesheet" type="text/css" href="/socAllPage.css">
					<script type="text/javascript" src="/jquery-1.4.1.min.js"></script>
					<script type="text/javascript" src="/socAllPage.js"></script>
				</head>

				<body class="Home">
					<div id="wrap">
						<div id="banner">
							<img src="/banner.gif"/>
						</div>

						<div id="links">
							<ul>
								<li class="live">Home</li>
								<li><a href="/page.php?linkid=3">CNWP</a></li>
								<li><a href="/page.php?linkid=2">Left Unity</a></li>
								<li><a href="/page.php?linkid=4">Reports</a></li>
								<li><a href="/events.php">Events</a></li>
								<li><a href="/about.php">About Us</a></li>
								<li><a href="/contact.php">Contact Us</a></li>
							</ul>
						</div>

						<div id="content">
							<div id="col_full">
								<div class="panel_full">
										<div class="story">
											<p class="storyHead">2019 AGM continues strategy: build unity on the left</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=140">read article</a></p>
										</div>

										<div class="story">
											<p class="storyHead">2018 SA AGM agrees to continue promoting unity across the left, inside and outside the Labour party, on a class basis</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=136">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">Socialist Alliance AGM agrees to donate £100 each to anti-cuts candidates in May 2018 – if they have also been members of the SA at some time since 2004 re-launch</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=135">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">2018 Socialist Alliance AGM to be held on February 13th</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=134">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">SA AGM agrees to donate £100 each to former members (since 2004) who are anti-austerity candidates in the May 2016 Council elections </p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=129">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">Report from march TUSC Steering Committee from Pete McLaren</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=128">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">Socialist Alliance AGM – Wed April 13th, 6.30pm, Somers Town Cafe, Charlton St, Euston/Kings Cross</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=127">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">Socialist Alliance agrees to use large part of recent legacy to help fund largest possible left electoral challenge – through TUSC</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=124">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">SOCIALIST ALLIANCE AGM 2014  SUNDAY SEPTEMBER 21st 3.30pm Somers Town Café/bar, 60 Chalton St, London NW1 1HS (midway between Euston and Kings Cross)</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=123">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">July 2014: TUSC starts to prepare for the General Election – and seeks discussions with Left Unity, reports ISN delegate Pete McLaren</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=122">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">Left Unity's June National Council (just about) discusses 2015 General Election – without reaching any conclusions</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=121">read article</a></p>
										</div>

										<div class="story">
											<p class="storyHead">Independent Socialist Network calls on TUSC and Left Unity to collaborate and build the largest possible left General Election challenge</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=120">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">SA NEC discusses its attitude to Left Unity and developments within TUSC</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=118">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">ISN Meeting re-affirms support for working within TUSC whilst helping build Left Unity REPORT FROM ISN MEETING May 18th, by Pete McLaren</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=117">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">LEFT UNITY MEETING MAKES SOME PROGRESS – but there is plenty still to work on REPORT FROM NATIONAL LEFT UNITY MEETING MAY 11th</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=116">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">TUSC National Steering Committee makes a number of key decisions – report from March and May SC meetings</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=115">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">Terry Liddle – a tribute from SA Nat Sec Pete McLaren</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=113">read article</a></p>
										</div>				

										<div class="story">
											<p class="storyHead">SA AGM December 2nd, 3pm, Lucas Arms, Grays Inn Rd (near Kings Cross). There is one resolution:</p>
											<p class="storyLink"><a href="/?linkId=1&amp;storyId=112">read article</a></p>
									</div>				

									<div class="story">
										<p class="storyHead">TUSC NATIONAL CONFERENCE – SAT SEPT 22</p>
										<p class="storyLink"><a href="/?linkId=1&amp;storyId=109">read article</a></p>
									</div>				

									<div class="story">
										<p class="storyHead">Obituary: Dave Spencer – founding member of the Socialist Alliance</p>
										<p class="storyLink"><a href="/?linkId=1&amp;storyId=108">read article</a></p>
									</div>				

									<div class="story">
										<p class="storyHead">REPORT FROM TUSC INDEPENDENT SOCIALIST NETWORK MEETING 19/05/12 – further progress made</p>
										<p class="storyLink"><a href="/?linkId=1&amp;storyId=107">read article</a></p>
									</div>				

									<div class="story">
										<p class="storyHead">TUSC MAKES SOME ELECTORAL PROGRESS claims Pete McLaren, independent socialist representative on the TUSC National Steering Committee and 2012 Candidate in Rugby </p>
										<p class="storyLink"><a href="/?linkId=1&amp;storyId=102">read article</a></p>
									</div>				

									<div class="story">
										<p class="storyHead">Rejection of alternative site by Pickles leaves Dale Farm community in ‘desperate conditions’ 02/03/2012 </p>
										<p class="storyLink"><a href="/?linkId=1&amp;storyId=101">read article</a></p>
									</div>

									<img class="panel_bottom" src="/full_BG_bottom.gif">
								</div>
							</div>
						</div>

						<div id="footer">
							<p>Alliance for Socialism, Internationalism, Republicanism, and the Environment and opposed to racism, fascism and specific oppressions</p>
							<img class="panel_bottom" src="/footer_BG_bottom.gif">
						</div>

						<div id="credits">
							<p>© Socialist Alliance 2020, web design: <a href="http://www.futurawebsites.com/" class="newWindow">futura websites</a></p>
						</div>
					</div>
				</body>
			</html>
		`
	})
}

module.exports = createSSRApp;
