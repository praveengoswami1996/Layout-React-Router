import { useParams, useNavigate } from "react-router-dom";
import mobile from '../assets/mobile.svg';
import tablet from '../assets/tablet.svg';
import laptop from '../assets/laptop.svg';
import { useEffect } from "react";

const postImages = {
    mobile,
    tablet,
    laptop
}

function PostDetail() {
    const { category } = useParams();
    const navigateTo = useNavigate();

    useEffect(() => {
        if (!postImages.hasOwnProperty(category)) {
            navigateTo('*', {replace : true});
        }
    }, [category, navigateTo]);

    return (
        <div className="app__postdetail">
            <div className="app__postdetail-container">

                <div className="app__postdetail-img">
                    <img src={postImages[category]} alt="post img"/>
                </div>
                <p className="app__postdetail-desc">
                <span>{category}</span> eget pellentesque sem. Vestibulum vitae nibh ornare, consequat lorem non, venenatis nibh. Fusce in accumsan ex. Curabitur pharetra arcu quis volutpat mollis. Vivamus eleifend arcu sit amet semper molestie. Mauris congue eget diam vitae posuere. Nam venenatis efficitur consectetur. Nullam et velit in quam pharetra fermentum. Maecenas placerat ipsum quam, at gravida urna porta quis. Nullam commodo ex tortor, vel posuere nisl dignissim non. Curabitur sed egestas enim. Etiam pharetra augue vel odio lacinia, eget tincidunt justo auctor. Quisque lobortis nibh eu dignissim vehicula. In sagittis, velit sed commodo interdum, eros dui consectetur ex, nec accumsan dolor erat vitae lacus.
                Curabitur pharetra arcu quis volutpat mollis. Vivamus eleifend arcu sit amet semper molestie. Mauris congue eget diam vitae posuere. Nam venenatis efficitur consectetur. Nullam et velit in quam pharetra fermentum. Maecenas placerat ipsum quam, at gravida urna porta quis. Nullam commodo ex tortor, vel posuere nisl dignissim non. Curabitur sed egestas enim. Etiam pharetra augue vel odio lacinia, eget tincidunt justo auctor. Quisque lobortis nibh eu dignissim vehicula. In sagittis, velit sed commodo interdum, eros dui consectetur ex, nec accumsan dolor erat vitae lacus.
                Nam venenatis efficitur consectetur. Nullam et velit in quam pharetra fermentum. Maecenas placerat ipsum quam, at gravida urna porta quis. Nullam commodo ex tortor, vel posuere nisl dignissim non. Curabitur sed egestas enim. Etiam pharetra augue vel odio lacinia, eget tincidunt justo auctor. Quisque lobortis nibh eu dignissim vehicula. In sagittis, velit sed commodo interdum, eros dui consectetur ex, nec accumsan dolor erat vitae lacus.
                </p>
            </div>
        </div>
    )
}

export default PostDetail;