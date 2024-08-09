const projectData = {
  _id: {
    $oid: "63b64dc9e3b230ebb60a495d",
  },
  _key: "topic:2085",
  category: "Course",
  cid: {
    $numberDouble: "NaN",
  },
  commitment: "4 hours",
  commitment_type: "custom",
  deadline: "",
  description:
    "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
  faqs: [],
  globalTags: [],
  isActive: true,
  lastposttime: 0,
  learning_outcomes: [
    "Bare minimum knowledge of project management",
    "4SA Concept",
    "Would be able to handle any project efficiently",
  ],
  mainPid: 0,
  postcount: 0,
  pre_requisites: [
    "An open mind to learn any concept",
    "Thought of Unlearning and Relearning ",
  ],
  project_image:
    "https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1114276/0413_What_is_a_Technical_Project_Manager_Luke_Social-21e35c2d76465934c0f844c396db762a.png",
  short_description:
    "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
  slug: "2085/technical-project-management",
  status: "published",
  tasks: [
    {
      task_id: 18882,
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      status: "notworkyet",
      assets: [
        {
          asset_id: 18883,
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
          asset_content: " https://www.youtube.com/embed/TiMRwri1xJ8",
          asset_type: "display_asset",
          asset_content_type: "video",
        },
        {
          asset_id: 18884,
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
          asset_content: " ",
          asset_type: "input_asset",
          asset_content_type: "threadbuilder",
        },
        {
          asset_id: 18885,
          asset_title: "Structure you pointers",
          asset_description:
            "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          asset_content: " ",
          asset_type: "input_asset",
          asset_content_type: "article",
        },
        {
          asset_id: 18886,
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
          asset_content:
            " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          asset_type: "display_asset",
          asset_content_type: "article",
        },
      ],
    },
  ],
  tid: 2085,
  timestamp: 1672891849700,
  title: "Technical Project Management",
  type: "project",
  uid: 100,
  viewcount: 0,
  publishedAt: 1672893847792,
};

// Function to create asset elements
function createAssetElement(asset) {
  const assetElement = document.createElement("article");
  assetElement.className = "asset";
  assetElement.id = asset.asset_title.toLowerCase().replace(/\s+/g, "-");

  const assetHeader = document.createElement("div");
  assetHeader.className = "asset-header";
  assetHeader.innerHTML = `
    <h3>${asset.asset_title}</h3>
    <img src="./assets/help.svg" alt="Help" class="help-icon" />
  `;
  assetElement.appendChild(assetHeader);

  const assetContent = document.createElement("div");
  assetContent.className =
    asset.asset_title === "4SA Method" ? "asset-content-2" : "asset-content";
  assetContent.innerHTML = getAssetContent(asset);
  assetElement.appendChild(assetContent);

  return assetElement;
}

// Function to get asset content
function getAssetContent(asset) {
  console.log("Asset:", asset.asset_title, asset.asset_content);
  switch (asset.asset_title) {
    case "Technical Project Management":
      return `
        <p class="description-top">
          <strong>Description:</strong> ${asset.asset_description}
        </p>
        <div class="video-container">
          <iframe width="480" height="291" src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
    case "Threadbuild":
      return `
        <p class="description-top">
          <strong>Description:</strong> ${asset.asset_description}
        </p>
        <div class="section">
          <div class="section-title">
            <div>
              <img src="./assets/vertical-arrow.svg" alt="arrow vertical" />
              <h4>Thread A</h4>
            </div>
          </div>
          <div class="input-group">
            <div class="input-box">
              <label for="subthread1">Sub thread 1</label>
              <textarea id="subthread1" class="input-text" placeholder="Enter Text Here"></textarea>
            </div>
            <div class="input-box">
              <label for="subinterpretation1">Sub Interpretation 1</label>
              <textarea id="subinterpretation1" class="input-text" placeholder="Enter Text Here"></textarea>
            </div>
          </div>
          <div class="actions">
            <div class="threadbuild-button">
              <button><img src="./assets/bulb.svg" alt="Bulb" /></button>
              <button><img src="./assets/message.svg" alt="Message" /></button>
              <button><img src="./assets/idea.svg" alt="Idea" /></button>
              <button><img src="./assets/autumn.svg" alt="Autumn" /></button>
            </div>
            <div class="dropdown-flex">
              <select class="dropdown">
                <option>Select Categ</option>
              </select>
              <select class="dropdown">
                <option>Select Proces</option>
              </select>
            </div>
          </div>
          <button class="add-btn">
            <p>+</p>
            Sub-thread
          </button>
          <div class="summary">
            <label for="summary-thread-a">Summary for Thread A</label>
            <textarea id="summary-thread-a" class="summary-input" placeholder="Enter Text Here"></textarea>
          </div>
        </div>
      `;
    case "Structure you pointers":
      return `
        <p class="description-third">
          <strong>Description:</strong> ${asset.asset_description}
        </p>
        <div class="note-area">
          <label for="title" class="title">Title</label>
          <input type="text" id="title" />
          <label for="content" class="content">Content</label>
          <div class="file">
            <ul>
              <li>File</li>
              <li>Edit</li>
              <li>View</li>
              <li>Insert</li>
              <li>Format</li>
              <li>Table</li>
              <li>Tools</li>
              <li>Help</li>
            </ul>
            <ul>
              <li><img src="./assets/undo.svg" alt="undo" /></li>
              <li><img src="./assets/redo.svg" alt="redo" /></li>
              <li><img src="./assets/resize.svg" alt="resize" /></li>
              <li><input type="text" placeholder="Paragraph" /></li>
              <li id="menu">&#8942;</li>
            </ul>
          </div>
          <textarea id="content"></textarea>
        </div>
      `;
    case "4SA Method":
      return `
        <p class="description-fourth">
          <strong>Description:</strong> ${asset.asset_description}
        </p>
        <div class="section">
          <div class="method-intro">
            <div class="method-intro-content">
              <img src="./assets/vertical-arrow.svg" alt="arrow vertical" />
              <h4>Introduction</h4>
            </div>
          </div>
          <div class="section-content">
            <p>The 4SA Method, How to bring an idea into progress?</p>
            <a href="#">See More</a>
          </div>
        </div>
        <div class="section">
          <div class="section-method">
            <div>
              <img src="./assets/vertical-arrow.svg" alt="arrow vertical" />
              <h4>Thread A</h4>
            </div>
          </div>
          <div class="section-content">
            <p>How are you going to develop your strategy? Which method are you going to use to develop a strategy? What if the project is lengthy?</p>
            <a href="#">See More</a>
          </div>
        </div>
        <div class="section example-section">
          <div class="section-method-2">
            <div>
              <h4>Example 1</h4>
            </div>
            <div>
              <p>You have a concept, How will you put into progress?</p>
            </div>
          </div>
        </div>
      `;
    default:
      return "<p>No content available</p>";
  }
}

// Load content function
function loadContent() {
  const contentWrapper = document.getElementById("dynamicContent");
  console.log(projectData.tasks); 

  projectData.tasks.forEach((task) => {
    console.log(task); 
    const taskSection = document.createElement("section");
    taskSection.className = "content-first";
    taskSection.innerHTML = `
      <div class="top-content">
        <h1>${projectData.title}</h1>
        <button class="submit-task">Submit Task</button>
      </div>
      <div class="top-description">
        <h3>${task.task_title}</h3> <!-- Task title -->
        <p class="description">${task.task_description}</p>
      </div>
    `;

    const gridAsset = document.createElement("div");
    gridAsset.className = "grid-asset";

    task.assets.forEach((asset) => {
      console.log(asset); 
      const assetElement = createAssetElement(asset);
      gridAsset.appendChild(assetElement);
    });

    taskSection.appendChild(gridAsset);
    contentWrapper.appendChild(taskSection);
  });
}

// Call the function to load content
document.addEventListener("DOMContentLoaded", loadContent);


// Expand/collapse functionality
document.getElementById("expand-arrow").addEventListener("click", function () {
  document.querySelector(".expand").style.display = "none";
  document.querySelector(".collapse").style.display = "block";
});

document
  .getElementById("collapse-arrow")
  .addEventListener("click", function () {
    document.querySelector(".expand").style.display = "block";
    document.querySelector(".collapse").style.display = "none";
  });
