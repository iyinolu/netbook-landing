import React from "react";
import {
  CommunityCard,
  CommunityContent,
  CommunityHeading,
  CommunitySection,
} from "./Community.styled";
import CommunityIcon from "../../../images/Icon.png";
import CommunityIcon1 from "../../../images/Icon-1.png";
import CommunityIcon2 from "../../../images/Icon-2.png";
import CommunityIcon3 from "../../../images/Icon-3.png";
import CommunityIcon4 from "../../../images/Icon-4.png";
import CommunityIcon5 from "../../../images/Icon-5.png";

const Community = () => {
  return (
    <CommunitySection>
      <div data-name={"community-container"}>
        <CommunityHeading>
          <span>Our Community</span>
          <h2>Community Main Feature</h2>
          <p>
            The wise man therefore always holds in these matters to taahis
            principle of selection.
          </p>
        </CommunityHeading>
        <CommunityContent>
          <CommunityCard>
            <div data-col={1}>
              <img src={CommunityIcon} alt="icon1"></img>
            </div>
            <div data-col={2}>
              <h3>Members, Friends</h3>
              <p>
                Members, Friends Connection ( like followers ), Private Message
              </p>
            </div>
          </CommunityCard>
          <CommunityCard>
            <div data-col={1}>
              <img src={CommunityIcon3} alt="icon1"></img>
            </div>
            <div data-col={2}>
              <h3>Groups</h3>
              <p>
                Your users can create groups to let other users to join and talk
              </p>
            </div>
          </CommunityCard>
          <CommunityCard>
            <div data-col={1}>
              <img src={CommunityIcon1} alt="icon1"></img>
            </div>
            <div data-col={2}>
              <h3>Forum</h3>
              <p>
                Forum is ready by BBPress. Your users can make topics and talk.
              </p>
            </div>
          </CommunityCard>
          <CommunityCard>
            <div data-col={1}>
              <img src={CommunityIcon4} alt="icon1"></img>
            </div>
            <div data-col={2}>
              <h3>Custom Module</h3>
              <p>
                You can create Members, Groups Module. We already created 3
                modules. It's by drag & drop live builder.
              </p>
            </div>
          </CommunityCard>
          <CommunityCard>
            <div data-col={1}>
              <img src={CommunityIcon2} alt="icon1"></img>
            </div>
            <div data-col={2}>
              <h3>List Builder</h3>
              <p>
                Members, Groups list can be modified by drag & drop live
                builder.
              </p>
            </div>
          </CommunityCard>
          <CommunityCard>
            <div data-col={1}>
              <img src={CommunityIcon5} alt="icon1"></img>
            </div>
            <div data-col={2}>
              <h3>List Scroll Effects</h3>
              <p>
                8 different scroll effects are ready. You can always change by
                your tastes.
              </p>
            </div>
          </CommunityCard>
        </CommunityContent>
      </div>
    </CommunitySection>
  );
};

export default Community;
