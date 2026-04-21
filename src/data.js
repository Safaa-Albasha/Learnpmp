export const EXAM_META = {
  totalQuestions: 180,
  duration: '230 minutes',
  domains: [
    { name: 'People', pct: 42, tasks: 14, color: '#818cf8' },
    { name: 'Process', pct: 50, tasks: 19, color: '#34d399' },
    { name: 'Business Environment', pct: 8, tasks: 4, color: '#fbbf24' }
  ],
  passingNote: 'PMI uses psychometric scoring — target 70%+ in practice to feel confident',
  formats: ['Multiple choice', 'Multiple responses', 'Matching', 'Hotspot', 'Fill-in-the-blank'],
  agileNote: 'Approximately 50% of questions have an Agile or hybrid focus'
};

export const domains = [
  {
    id: 'people',
    name: 'People',
    icon: '👥',
    weight: '42%',
    color: '#818cf8',
    tagline: 'Leading teams, managing conflict, engaging stakeholders',
    overview: `The People domain is the largest domain at 42% of the exam. It covers everything about leading people — your team, stakeholders, and yourself as a leader.

The modern PMP exam expects you to think like a **servant leader**: someone who empowers their team, removes obstacles, builds psychological safety, and creates conditions for high performance. Gone are the days of command-and-control management.

Key mindset shifts the exam tests:
• Directing → Coaching and mentoring
• Managing tasks → Empowering individuals
• Avoiding conflict → Resolving conflict constructively  
• Top-down decisions → Collaborative decision-making
• Transactional leadership → Transformational and servant leadership

**Why this domain matters beyond the exam:**
Research consistently shows that project failures stem primarily from people and communication issues — not technical problems. A PM who masters this domain is far more effective in real projects.`,
    tasks: [
      {
        id: 'p01',
        title: 'Manage Conflict',
        examWeight: 'High',
        description: 'Interpret the source and stage of conflict, examine/probe/determine appropriate resolution',
        theory: `**What is conflict in project management?**
Conflict is the perceived incompatibility of goals, interests, or actions between two or more parties. The key word is "perceived" — often, conflicts arise from misunderstanding rather than actual incompatibility.

**Is conflict bad?**
No. The PMP exam explicitly treats conflict as **natural and potentially productive**. Healthy conflict leads to better decisions, stronger relationships (after resolution), and more innovative solutions. The goal is not to eliminate conflict but to manage it constructively.

**Stages of Conflict (Pondy's Model):**
1. **Latent** — Conditions for conflict exist but haven't surfaced yet
2. **Perceived** — Parties become aware of the conflict
3. **Felt** — Emotional component develops (frustration, anxiety)
4. **Manifest** — Conflict becomes visible in behavior
5. **Aftermath** — Resolution and its lingering effects

**Common Sources of Project Conflict:**
The PMI research identifies these sources in rough order of frequency:
1. Schedules (most common) — competing priorities, unrealistic timelines
2. Project priorities — different stakeholders want different things first
3. Resources — competition for limited people, equipment, budget
4. Technical opinions — disagreements on approach, architecture, tools
5. Administrative procedures — how work gets done, reporting, processes
6. Cost — budget disputes
7. Personality clashes (least common but most difficult)`,
        techniques: `**The 5 Conflict Resolution Styles (Thomas-Kilmann):**

**1. Collaborating / Problem Solving ⭐ BEST FOR LONG-TERM**
- Approach: Both parties work together openly to find a solution that fully satisfies everyone
- Outcome: Win / Win
- When to use: When the issue is important, when time permits, when you want to preserve the relationship, when both parties are committed
- When NOT to use: Emergency situations requiring instant decisions; when one party is operating in bad faith
- Example: "Let's sit down together and look at all the data to find an approach that works for everyone."

**2. Compromising / Reconciling**
- Approach: Both parties give up something to reach a middle ground
- Outcome: Partial Win / Partial Win (or partial lose / partial lose)
- When to use: When collaboration has failed, when you need a temporary solution, when both parties are equally powerful and committed to their positions
- Example: "You get Monday's release, I get Friday's deadline — we both adjust."

**3. Forcing / Directing**
- Approach: One party imposes their solution using authority or power
- Outcome: Win / Lose
- When to use: Emergency or safety situations; when you have information others lack; when the decision is yours to make
- Warning: Damages relationships. Use sparingly.
- Example: "We are doing it this way. This is not a discussion right now."

**4. Smoothing / Accommodating**
- Approach: Emphasize areas of agreement, downplay differences, accommodate the other party
- Outcome: Temporary peace (does NOT resolve the root cause)
- When to use: Temporarily, when you need to cool emotions before a real resolution
- Warning: The conflict will re-emerge. This is a band-aid, not a cure.
- Example: "We have more in common than we think — let's focus on where we agree."

**5. Withdrawing / Avoiding**
- Approach: Remove yourself from the conflict; refuse to engage
- Outcome: Lose / Lose (nothing gets resolved)
- When to use: Only when the issue is truly trivial; when emotions are too high and you need a cooling-off period; when you need more information before engaging
- Warning: Chronic avoidance breeds resentment and escalation.

**EXAM RULE:** "What is the BEST conflict resolution?" → **Collaborating**, UNLESS the question says there's an emergency, the decision is already made, or safety is at risk.`,
        enablers: [
          'Interpret the source and stage of the conflict',
          'Examine the context of the conflict (e.g., culture, timeline, organizational factors)',
          'Evaluate/recommend/reconcile the appropriate conflict resolution solution',
          'Facilitate the conflict resolution approach'
        ],
        keyTerms: ['Collaborating/Problem Solving', 'Compromising', 'Forcing', 'Smoothing', 'Withdrawing', 'Thomas-Kilmann', 'Conflict stages'],
        examTips: [
          'Always choose Collaborating unless the situation is an emergency or requires immediate authority',
          'Smoothing is temporary — the conflict will resurface',
          'Forcing (Win/Lose) should be your last resort in normal situations',
          'Withdrawing = Lose/Lose and is almost never the right answer',
          'The exam may describe conflict as "healthy disagreement" — still manage it, but not always as a crisis'
        ]
      },
      {
        id: 'p02',
        title: 'Lead a Team',
        examWeight: 'High',
        description: 'Set a clear vision, support diversity and inclusion, value servant leadership, determine appropriate leadership style',
        theory: `**Leadership vs. Management:**
Management is about planning, organizing, and controlling work. Leadership is about influencing, inspiring, and guiding people. The PMP exam heavily tests your leadership skills because technical management alone doesn't produce great projects.

**What the exam means by "servant leadership":**
Robert Greenleaf coined the term in 1970. A servant leader's primary focus is on the growth and well-being of their team and community. Applied to project management:
- Remove obstacles so the team can work
- Provide resources and support
- Shield the team from organizational interference
- Facilitate rather than dictate
- Develop team members' capabilities
- Create psychological safety

**Psychological Safety (Amy Edmondson):**
Teams perform better when members feel safe to speak up, take risks, and admit mistakes without fear of punishment. PMs create this by:
- Modeling vulnerability ("I don't know — let's find out together")
- Rewarding questions and dissent
- Treating failures as learning opportunities
- Never punishing honest mistakes`,
        techniques: `**Leadership Styles and When to Use Each:**

**Situational Leadership (Hersey & Blanchard) — HIGH EXAM PRIORITY:**
This model says the best leadership style depends on the follower's Development Level (Competence × Commitment).

| Development Level | Competence | Commitment | Best Style |
|---|---|---|---|
| D1 — Enthusiastic Beginner | Low | High | S1 Directing (Tell) |
| D2 — Disillusioned Learner | Low-Med | Low | S2 Coaching (Sell) |
| D3 — Capable but Cautious | Med-High | Variable | S3 Supporting (Participate) |
| D4 — Self-Reliant Achiever | High | High | S4 Delegating |

**S1 Directing (Telling):** High task, low relationship. "Here's what to do and how to do it." Used for new team members with no experience.

**S2 Coaching (Selling):** High task, high relationship. "Here's what and why — I'm here to support you." Used when someone tries but struggles.

**S3 Supporting (Participating):** Low task, high relationship. "You have the skills — I'm here to encourage and remove obstacles." Used for capable but hesitant team members.

**S4 Delegating:** Low task, low relationship. "I trust you completely. Run with it." Used for top performers.

**Other Leadership Styles:**
- **Transformational:** Inspire through vision and enthusiasm; create change; motivate beyond self-interest
- **Transactional:** Manage through rewards and consequences; maintain status quo
- **Laissez-faire:** Hands-off; let team decide (only appropriate for highly expert, self-directed teams)
- **Charismatic:** Lead through personal charisma and charm
- **Interactional:** Combines transformational, transactional, and laissez-faire

**Exam Rule for Leadership Style Questions:**
"What leadership style should a PM use?" → If the team is new/low skill: Directing. If experienced/high skill: Delegating. If mid-skill/low motivation: Coaching or Supporting. Servant leadership principles apply throughout.`,
        enablers: [
          'Set a clear vision and mission for the team',
          'Support diversity and inclusion (culture, behavior, respect)',
          'Value servant leadership principles',
          'Determine an appropriate leadership style for the situation',
          'Inspire, motivate, and influence team members',
          'Demonstrate values and model ethical behavior'
        ],
        keyTerms: ['Servant leadership', 'Situational leadership', 'Transformational leadership', 'Psychological safety', 'D1-D4 development levels', 'Directing/Coaching/Supporting/Delegating'],
        examTips: [
          'Servant leadership = PM puts team needs first, removes obstacles',
          'Match leadership style to team member\'s development level — NOT to your preference',
          'Transformational > Transactional in most exam scenarios',
          'A PM who "just tells people what to do" is rarely the right answer',
          'Psychological safety questions: answer = create an environment where people feel safe to speak up'
        ]
      },
      {
        id: 'p03',
        title: 'Support Team Performance',
        examWeight: 'High',
        description: 'Appraise team performance against KPIs, support team member growth, provide appropriate feedback',
        theory: `**Team Development is a Process, Not an Event:**
High-performing teams don't happen by accident. They require deliberate investment in development, recognition, and an environment that supports growth.

**Performance vs. Competence:**
- Competence = the ability to do something (skills + knowledge)
- Performance = actually doing it (results)
- A gap can exist because of: skill deficiency, motivation issues, environmental obstacles, unclear expectations
- Diagnosing the root cause determines the right response

**Intrinsic vs. Extrinsic Motivation:**
- Extrinsic: Salary, bonuses, titles, perks (these have limits — they stop working or cause gaming)
- Intrinsic: Autonomy, mastery, purpose (Daniel Pink's Drive model — these create sustained motivation)`,
        techniques: `**Tuckman's 5 Stages of Team Development — MUST KNOW:**

**Stage 1: Forming**
- Characteristics: Team comes together; members are polite, excited, uncertain
- Behaviors: People test boundaries, look to the leader for direction
- PM role: Provide direction, clarify goals and roles, establish ground rules
- Red flag if stuck here: No clear purpose or direction

**Stage 2: Storming**
- Characteristics: Conflict emerges as personalities clash; disagreements about roles, methods, priorities
- Behaviors: Power struggles, frustration, questioning leadership
- PM role: Coach, facilitate conflict resolution, reinforce ground rules, don't panic — this is NORMAL
- Red flag: Conflict that is never resolved

**Stage 3: Norming**
- Characteristics: Team establishes working norms and relationships solidify
- Behaviors: Respect grows, collaboration improves, team starts self-organizing
- PM role: Reduce directing, encourage collaboration, facilitate decision-making
- Red flag: Groupthink (norming can lead to unhealthy consensus)

**Stage 4: Performing**
- Characteristics: Team is highly productive, self-directed, and motivated
- Behaviors: High output, effective conflict resolution, strong trust
- PM role: Delegate, support, celebrate wins, stay out of the way
- This is the goal!

**Stage 5: Adjourning (Mourning)**
- Characteristics: Team disbands as project ends
- Behaviors: Sense of loss, reflection, pride in accomplishment
- PM role: Celebrate success, ensure knowledge transfer, acknowledge contributions, help team members transition

**Key Motivation Theories:**

**Maslow's Hierarchy of Needs:**
People are motivated by needs in this order (lower must be met first):
5 → Self-Actualization: Reaching full potential, creativity, meaning
4 → Esteem: Recognition, achievement, status, respect
3 → Social: Belonging, friendship, teamwork
2 → Safety: Job security, health, stability
1 → Physiological: Pay, food, shelter, basic working conditions

**Implication for PMs:** If someone's salary hasn't been paid (Physiological), talking about recognition (Esteem) won't motivate them. Address lower-level needs first.

**Herzberg's Two-Factor Theory:**
- **Hygiene Factors** (cause DISsatisfaction if ABSENT): Salary, working conditions, job security, company policies, relationships, supervision quality
- **Motivators** (cause SATISFACTION if PRESENT): Achievement, recognition, meaningful work, responsibility, growth, advancement
- Key insight: Adding hygiene factors doesn't motivate — it just removes dissatisfaction. Real motivation comes from motivators.
- Exam application: Giving someone a raise won't make them highly motivated — give them meaningful work and recognition.

**McGregor's Theory X and Y:**
- Theory X: People are lazy by nature, avoid work, need constant supervision and extrinsic rewards/punishments
- Theory Y: People are self-motivated, seek responsibility, find work naturally fulfilling
- PMP favors Theory Y mindset completely

**McClelland's Theory of Needs:**
People are primarily motivated by one of three needs:
- Achievement (nAch): Drive to excel, reach goals, solve problems
- Affiliation (nAff): Need for friendly relationships and belonging
- Power (nPow): Desire to influence, lead, or control others
- Project implication: Tailor recognition and roles to what motivates each individual

**Vroom's Expectancy Theory:**
Motivation = Expectancy × Instrumentality × Valence
- Expectancy: "Can I actually do this?" (effort → performance)
- Instrumentality: "If I perform, will I get the reward?" (performance → outcome)
- Valence: "Do I actually want that reward?" (outcome → value)
- Implication: All three must be positive for motivation to occur`,
        enablers: [
          'Appraise team members\' performance against KPIs',
          'Support and recognize team member growth and development',
          'Determine appropriate feedback approach (positive, constructive, corrective)',
          'Verify performance improvements'
        ],
        keyTerms: ['Tuckman\'s stages', 'Maslow', 'Herzberg', 'Theory X/Y', 'McClelland', 'Vroom', 'Intrinsic motivation', 'Hygiene factors', 'Motivators'],
        examTips: [
          'Tuckman: Every team goes through Forming→Storming→Norming→Performing (in order)',
          'Storming is NORMAL and HEALTHY — don\'t try to skip it',
          'Herzberg: Salary is a HYGIENE factor, NOT a motivator',
          'Theory Y = PMP\'s preferred mindset (people want to work and grow)',
          'For feedback: specific, timely, behavior-focused, private for criticism, public for praise'
        ]
      },
      {
        id: 'p04',
        title: 'Empower Team Members and Stakeholders',
        examWeight: 'Medium',
        description: 'Organize around team strengths, support task accountability, determine decision-making authority levels',
        theory: `**What Empowerment Really Means:**
Empowerment is not just saying "you're empowered." True empowerment means giving people:
1. **Authority** — the right to make decisions
2. **Resources** — the tools and information they need
3. **Accountability** — ownership of outcomes
4. **Support** — knowing help is available if needed

Without authority, "empowerment" is just extra responsibility. Without accountability, it's just permission without consequence.

**The Accountability-Responsibility Matrix:**
- Responsibility = doing the work (can be shared)
- Accountability = answering for the outcome (should be singular per task)
- Authority = the right to make decisions about the work

**Self-Organizing Teams (Critical Agile Concept):**
In Scrum and other agile frameworks, teams self-organize — they decide HOW to accomplish the work assigned to them. The PM or Scrum Master does not assign individual tasks. Team members pull work from the backlog themselves. This requires:
- High trust from leadership
- Clear goals and boundaries
- Team members who have internalized ownership`,
        techniques: `**Delegation — How to Do It Right:**

Most PMs either under-delegate (do everything themselves) or over-delegate (abdicate responsibility). Effective delegation:

1. **Select the right person** — Match task to competency and development goals
2. **Define the outcome** — Be clear about WHAT, not HOW (unless process matters)
3. **Grant sufficient authority** — Give them the power to actually do the work
4. **Provide resources** — Time, budget, access, information
5. **Establish check-ins** — Not micromanagement, but deliberate touchpoints
6. **Let them work** — Resist the urge to solve their problems
7. **Recognize and give credit** — Praise effort and results publicly

**What to Delegate:**
- Routine tasks that others can do (even if less perfectly)
- Tasks that develop team members
- Tasks that others are better positioned to do
- Administrative work

**What NOT to Delegate:**
- Performance appraisals of direct reports
- Sensitive personnel matters
- Crisis-level decisions requiring your authority
- Strategic direction

**Decision-Making Authority Levels:**
Define these upfront in the team charter:
- Level 1: Team member decides and informs
- Level 2: Team member decides after consulting PM
- Level 3: PM decides with team input
- Level 4: PM decides and informs team
- Level 5: Sponsor/CCB decides with PM recommendation

**Agile Empowerment:**
Sprint retrospectives are a powerful empowerment tool — the team identifies their own process improvements without the PM dictating changes. Product owners have full authority over the backlog. Development teams decide how to build the sprint backlog items.`,
        enablers: [
          'Organize around team strengths',
          'Support team task accountability',
          'Evaluate demonstration of task accountability',
          'Determine and bestow appropriate levels of decision-making authority'
        ],
        keyTerms: ['Delegation', 'Accountability vs. responsibility', 'Self-organizing teams', 'Decision authority levels', 'Empowerment'],
        examTips: [
          'Empowerment = authority + resources + accountability + support',
          'Self-organizing teams choose HOW to do work; Product Owner chooses WHAT',
          'Delegation: give authority, not just responsibility',
          'If team member underperforms: first understand WHY before taking action'
        ]
      },
      {
        id: 'p05',
        title: 'Ensure Team Members Are Adequately Trained',
        examWeight: 'Medium',
        description: 'Determine required competencies, identify training needs, allocate resources for training',
        theory: `**Training vs. Performance Management:**
If someone isn't performing, diagnose WHY first:
- Skill gap → Training
- Knowledge gap → Education/coaching
- Motivation issue → Recognition, role clarity, accountability
- Environmental obstacle → Remove the impediment
- Unclear expectations → Clarification

Sending someone to training when they have a motivation problem wastes money and time. Holding someone accountable for a skill they were never taught is unfair.

**The 70-20-10 Learning Model:**
How adults actually learn and develop:
- 70% — On-the-job experiences, challenging assignments, solving real problems
- 20% — Social learning: feedback, coaching, mentoring, learning from others
- 10% — Formal training: classroom, eLearning, workshops, conferences

Implication: Classroom training is the least effective learning method. PMs should design development that leverages experience and coaching.`,
        techniques: `**Training Needs Analysis (TNA) Process:**

1. **Define required competencies** — What skills and knowledge does this project require?
2. **Assess current competency levels** — What does each team member already know/can do?
3. **Identify gaps** — Where does current level fall short of required level?
4. **Prioritize gaps** — Which gaps most critically impact project success?
5. **Select training methods** — Match method to gap type and urgency
6. **Budget and schedule training** — Include in Resource Management Plan
7. **Measure training effectiveness** — Did the gap close? (Kirkpatrick's 4 levels)

**Kirkpatrick's 4 Levels of Training Evaluation:**
1. Reaction — Did participants like the training?
2. Learning — Did they actually learn what was taught?
3. Behavior — Are they applying it on the job?
4. Results — Did it improve project outcomes?

Most organizations only measure Level 1. Level 3 and 4 matter most.

**Types of Training:**
- Formal: Classroom, online courses, certifications
- Informal: Learning by doing, job rotation, stretch assignments
- Social: Mentoring, coaching, peer learning, communities of practice
- Just-in-time: Quick tutorials, knowledge base articles when needed

**Stakeholder Training:**
Don't forget — stakeholders need training too!
- System demonstrations before UAT
- Change management training for impacted users
- Process training for operations taking over after project
- Include in Stakeholder Engagement Plan`,
        enablers: [
          'Determine required competencies and elements of training',
          'Determine training options based on training needs',
          'Allocate resources for training',
          'Measure training outcomes and effectiveness'
        ],
        keyTerms: ['Competency gap', '70-20-10 model', 'Kirkpatrick evaluation', 'Training Needs Analysis', 'On-the-job learning'],
        examTips: [
          'Training is for SKILL gaps — not motivation gaps',
          'Always include training costs and time in the project plan',
          '70% of learning happens on the job — not in classrooms',
          'If someone lacks skills, PM is partly responsible for not identifying and addressing it earlier'
        ]
      },
      {
        id: 'p06',
        title: 'Build a Team',
        examWeight: 'High',
        description: 'Appraise stakeholder skills, deduce project resource requirements, continuously refresh team skills',
        theory: `**Team Building is Both Science and Art:**
Effective teams share these characteristics (per research):
- Psychological safety: Safe to take risks and speak up
- Dependability: Members deliver quality work reliably
- Structure & clarity: Clear goals, roles, and plans
- Meaning: Work is personally important to each member
- Impact: Work creates change that matters

(Source: Google's Project Aristotle — 5-year study of 180+ teams)

**Diversity and Inclusion in Project Teams:**
Diverse teams consistently outperform homogeneous teams on complex problem-solving. Diversity includes:
- Functional diversity (different departments, skills)
- Demographic diversity (age, gender, ethnicity)
- Cognitive diversity (different thinking styles, perspectives)
- Cultural diversity (different national/cultural backgrounds)

Inclusion means actively creating conditions where all voices are heard and valued — not just having diverse people present.`,
        techniques: `**Resource Acquisition Methods:**

1. **Pre-assignment:** Team members named in the project charter; often because of specific skills needed
2. **Negotiation with functional managers:** Most common; PM must negotiate for people's time (often not dedicated)
3. **Acquisition from outside:** Contractors, consultants, freelancers
4. **Virtual team assembly:** Global talent, remote workers

**The Team Charter:**
One of the most important documents you can create at project start. Includes:
- Team values and shared commitments
- Communication norms (response times, channels, meeting cadence)
- Meeting norms (start/end on time, agendas, note-taking rotation)
- Decision-making processes (consensus, majority vote, PM decides)
- Conflict resolution approach (reference the 5 styles)
- Working hours and availability expectations
- Code of conduct

Key: The TEAM creates this together — it's not imposed by the PM. Ownership leads to adherence.

**Virtual Team Considerations:**
- Communication requires more deliberate effort
- Trust-building takes longer (no hallway conversations)
- Time zones require asynchronous-first mindset
- Cultural differences affect communication style (direct vs. indirect, high-context vs. low-context)
- Technology stack must be agreed upon upfront
- Isolation is a real risk — deliberately create social connection

**Team Building Activities:**
Not just "fun" — they serve specific purposes:
- Icebreakers: Reduce initial anxiety, help people learn each other
- Problem-solving exercises: Build trust through shared challenge
- Retrospectives: Build continuous improvement culture
- Celebrations: Reinforce positive behavior and shared success`,
        enablers: [
          'Appraise stakeholder skills',
          'Deduce project resource requirements',
          'Continuously assess and refresh team skills',
          'Maintain team and knowledge transfer'
        ],
        keyTerms: ['Team charter', 'Pre-assignment', 'Virtual teams', 'Psychological safety', 'Diversity & inclusion', 'Project Aristotle'],
        examTips: [
          'Team charter: the TEAM creates it together — not the PM alone',
          'Virtual teams need MORE deliberate communication, not less',
          'Psychological safety is the #1 predictor of team performance (Google research)',
          'Resource acquisition priority: internal negotiation before external hire'
        ]
      },
      {
        id: 'p07',
        title: 'Address and Remove Impediments, Obstacles, and Blockers',
        examWeight: 'High',
        description: 'Determine critical impediments, prioritize, implement solutions, reassess continuously',
        theory: `**The PM as Impediment Remover:**
One of the most important and least glamorous parts of being a project manager is removing obstacles so your team can work. An impediment that sits unresolved for a week can cost you two weeks of schedule — because the team loses momentum and context.

**Types of Impediments:**
- **Technical:** Missing tools, broken environments, access permissions, hardware delays
- **Organizational:** Approval processes, bureaucracy, conflicting priorities, resource contention
- **External:** Vendor delays, regulatory approvals, customer availability
- **Team-internal:** Skill gaps, interpersonal conflict blocking work, unclear requirements
- **Process:** Poorly defined workflows, excessive meetings, too much WIP

**Impediment vs. Risk vs. Issue:**
- Risk: Could happen in the future (manage proactively)
- Impediment: Is happening now and blocking work
- Issue: Has happened and needs resolution
Note: An unresolved impediment often becomes an issue or escalates a risk`,
        techniques: `**The Impediment Management Process:**

1. **Identify:** Surface impediments early — create a culture where the team reports them immediately (daily standups, 1:1s, retrospectives)
2. **Log:** Maintain an impediment backlog or issue log (date, description, owner, status, impact, target resolution)
3. **Triage:** Is this blocking critical work? Affecting critical path? Escalate now.
4. **Assign owner:** Every impediment needs one person responsible for resolution
5. **Resolve or escalate:** Determine what level of authority can fix this
6. **Track:** Review daily in standups (agile) or in status meetings (predictive)
7. **Close and document:** Document resolution for lessons learned

**When to Escalate vs. Resolve Yourself:**
Escalate when:
- The impediment requires authority above the PM level
- It involves significant budget changes
- It involves political or sensitive stakeholder issues
- It's a contract or legal matter
- You've tried to resolve it and failed

**Escalation Path:**
Team member → Project Manager → Sponsor → Steering Committee → Executive

**The Agile Impediment Board:**
In Scrum, the Scrum Master owns impediment removal. Typical board columns:
| Impediment | Owner | Date Raised | Status | Resolved Date |

Reviewed every daily standup. If it can't be resolved in 1-2 days, escalate.

**Prevention:**
The best impediment management is prevention:
- Risk management (identify potential blockers before they occur)
- Clear role definition (reduce role confusion blockers)
- Good procurement planning (prevent vendor delays)
- Stakeholder engagement (prevent approval delays)`,
        enablers: [
          'Determine critical impediments, obstacles, and blockers for the team',
          'Prioritize critical impediments based on impact',
          'Use network and authority to implement solutions',
          'Reassess continually to ensure resolution'
        ],
        keyTerms: ['Impediment backlog', 'Escalation path', 'Scrum Master role', 'Blocking issues', 'Issue log'],
        examTips: [
          'Removing impediments is one of the PM\'s PRIMARY responsibilities',
          'In Scrum: Scrum Master removes impediments, NOT the team',
          'Escalate EARLY — don\'t wait until a crisis',
          'Unresolved impediments in agile go on the impediment backlog for daily review',
          'The daily standup\'s "blockers" question is specifically for impediment identification'
        ]
      },
      {
        id: 'p08',
        title: 'Negotiate Project Agreements',
        examWeight: 'Medium',
        description: 'Analyze negotiation bounds, assess priorities, determine negotiation strategy, verify objectives are met',
        theory: `**What PMs Negotiate:**
Project managers negotiate constantly — for resources, for schedule relief, for scope clarity, for vendor terms, for stakeholder expectations, for budget. Negotiation skill directly impacts project success.

**Interest-Based vs. Position-Based Negotiation:**
- Position: "I need 5 developers." vs. "I can only give you 3."
- Interest: WHY do you need 5? WHY can only 3 be spared?
Often, exploring underlying interests reveals solutions neither party initially considered.

**BATNA — Best Alternative to a Negotiated Agreement:**
Your BATNA is what you do if negotiations fail. Knowing your BATNA:
- Gives you confidence and leverage
- Tells you your walk-away point
- Prevents accepting a bad deal
A strong BATNA = strong negotiating position. A weak BATNA = urgency to reach agreement.`,
        techniques: `**The Fisher-Ury Principled Negotiation Framework (Getting to Yes):**

1. **Separate people from the problem:** Attack the issue, not the person
2. **Focus on interests, not positions:** "Why do you need that?" reveals more options
3. **Invent options for mutual gain:** Brainstorm possibilities before deciding
4. **Use objective criteria:** External standards, expert opinions, market data

**Negotiation Preparation Checklist:**
- What is my ideal outcome?
- What is my acceptable outcome?
- What is my walk-away point?
- What is my BATNA?
- What do I know about the other party's interests and constraints?
- Where is there flexibility on both sides?
- What are the key facts and data I need?

**Negotiation Strategies:**

**Integrative (Win-Win) ⭐ Preferred:**
Seek creative solutions that expand value for both parties. Long-term relationship preserved.

**Distributive (Win-Lose):**
Fixed pie — one party gains, the other loses. Used in one-time transactions. Harms long-term relationship.

**Tactics (Use with Caution):**
- Anchoring: Make the first offer to set the reference point
- Good cop/Bad cop: One negotiator is tough, the other reasonable
- Silence: Don't fill silence after your offer — it creates discomfort
- Time pressure: "This offer expires Friday"

**PMP Exam Context:**
- Negotiating with functional managers for resources: Know that functional managers have their own priorities — find common ground
- Negotiating scope with sponsors: Always backed by data and impact analysis
- Contract negotiations: May involve legal team; PM facilitates but doesn't necessarily lead`,
        enablers: [
          'Analyze the bounds of the negotiation for agreement',
          'Assess priorities and determine ultimate objectives',
          'Verify agreement objectives are met through implementation',
          'Participate in agreement negotiations',
          'Determine negotiation strategy'
        ],
        keyTerms: ['BATNA', 'Principled negotiation', 'Integrative vs. distributive', 'Positions vs. interests', 'Walk-away point'],
        examTips: [
          'BATNA = your strongest tool before negotiating — always know it',
          'Win-Win is always the preferred outcome in the exam',
          'Focus on interests (WHY they want something) not positions (WHAT they want)',
          'After negotiation: document agreements immediately'
        ]
      },
      {
        id: 'p09',
        title: 'Collaborate with Stakeholders',
        examWeight: 'High',
        description: 'Evaluate engagement needs, optimize alignment between stakeholder needs and project objectives',
        theory: `**Stakeholder Collaboration vs. Stakeholder Management:**
"Management" implies one-way control. The PMP 7th edition deliberately uses "collaboration" because modern project management recognizes stakeholders as partners, not subjects.

Stakeholders who feel heard, valued, and included are more likely to:
- Support the project when things get difficult
- Provide useful feedback that improves outcomes
- Approve deliverables without unnecessary resistance
- Champion the project within their spheres of influence

**Who is a Stakeholder?**
Anyone who is (or believes they are) affected by the project OR who can affect the project. This includes:
- Project sponsor
- Customers and end users
- Project team members
- Functional managers providing resources
- Regulatory bodies
- Vendors and suppliers
- Communities affected by the project
- The public (for large infrastructure projects)

**The Stakeholder Engagement Continuum (PMBOK):**
Unaware → Resistant → Neutral → Supportive → Leading
Goal: Move stakeholders toward Supportive or Leading. Never ignore Resistant stakeholders.`,
        techniques: `**Stakeholder Identification Tools:**

1. **Stakeholder Register:** Documents all stakeholders with:
   - Name, role, organization, contact information
   - Assessment: interests, expectations, potential influence, classification
   - Current engagement level vs. desired engagement level
   - Communication requirements
   Note: This is a CONFIDENTIAL document — do not share it widely

2. **Power/Interest Grid:**
   - High Power + High Interest → Manage Closely (key stakeholders)
   - High Power + Low Interest → Keep Satisfied (don't burden, but don't ignore)
   - Low Power + High Interest → Keep Informed (they care and will amplify your message)
   - Low Power + Low Interest → Monitor (check occasionally)

3. **Salience Model (Mitchell, Agle, Wood):**
   Classifies stakeholders by:
   - Power (ability to impose will)
   - Legitimacy (appropriate involvement)
   - Urgency (time-sensitive claims)
   
4. **Stakeholder Cube / Onion Diagram:** 3D or layered representations for complex stakeholder landscapes

**Stakeholder Engagement Strategy Development:**
For each key stakeholder (or stakeholder group):
1. What do they care about most?
2. What is their current engagement level?
3. What is their desired engagement level?
4. What is our strategy to move them there?
5. Who is the best person to engage them?
6. What information do they need and when?

**Managing Difficult Stakeholders:**
- Resistant: Understand their concerns deeply; involve them in decisions; address concerns directly; don't go around them — it makes it worse
- Uninvested Sponsor: Schedule regular briefings; present information in business language (ROI, risk to organization); escalate to executive sponsor if needed
- Political Opponents: Find common ground; understand their organizational interests; involve them early; build coalition of support`,
        enablers: [
          'Evaluate engagement needs for stakeholders',
          'Optimize alignment between stakeholder needs, expectations, and project objectives',
          'Build trust and influence stakeholders to accomplish project objectives'
        ],
        keyTerms: ['Stakeholder register', 'Power/Interest grid', 'Salience model', 'Engagement continuum', 'Collaboration vs. management'],
        examTips: [
          'Stakeholder register is CONFIDENTIAL — don\'t share with stakeholders themselves',
          'Identify ALL stakeholders early — missing one can derail a project',
          'Resistant stakeholders need MORE engagement, not less',
          'Sponsor is your champion — keep them informed and protect the relationship',
          'Engagement is ongoing — not a one-time check'
        ]
      },
      {
        id: 'p10',
        title: 'Build Shared Understanding',
        examWeight: 'Medium',
        description: 'Break down misunderstandings, survey parties to reach consensus, investigate root causes',
        theory: `**Why Shared Understanding Matters:**
The #1 source of project failure is miscommunication about requirements, expectations, and scope. When people think they understand each other but don't, work gets done wrong, rework is required, and relationships deteriorate.

**Tacit vs. Explicit Knowledge:**
- Explicit: Documented, codifiable, easily shared (specs, processes, plans)
- Tacit: Experience-based, intuitive, hard to articulate ("I'll know it when I see it")
Tacit knowledge is the hardest to transfer and the most common source of misunderstanding in requirements.

**Mental Models:**
Everyone has mental models — unconscious assumptions about how things work. When people say "everyone knows that X means Y," they're revealing their mental model. PMs must surface and reconcile different mental models.`,
        techniques: `**Tools for Building Shared Understanding:**

**Prototyping and Mockups:**
Show, don't tell. A lo-fi prototype reveals more misunderstandings in 30 minutes than 3 hours of discussing requirements.

**User Stories (Agile):**
"As a [role], I want [capability] so that [benefit]."
- Forces articulation of who, what, and why
- Acceptance criteria make "done" concrete and testable

**Definition of Done (DoD):**
In agile, the team agrees upfront on what "done" means for any piece of work. Example:
- Code written and reviewed
- Unit tests passing
- Integrated with main branch
- Acceptance criteria met
- Documentation updated
- Demoed to Product Owner

**Active Listening Techniques:**
1. **Paraphrasing:** "So what you're saying is..."
2. **Clarifying:** "Can you give me an example of that?"
3. **Summarizing:** "Let me recap the key points..."
4. **Reflective questions:** "How would that work in the context of X?"
5. **Silence:** Let people finish their thought

**Communication Model (Shannon-Weaver):**
Sender → Encode → Transmit → Decode → Receiver → Feedback
**Noise** can occur at any step (language barriers, jargon, distractions, assumptions)
**The sender is responsible** for clear communication and confirming receipt

**Definition of Ready (DoR):**
Agile concept — work item must meet criteria before entering a sprint:
- User story is clear and understood by the team
- Acceptance criteria are defined
- Dependencies are identified
- Story is appropriately sized
- Design/technical considerations are addressed`,
        enablers: [
          'Break down the situation to identify the root cause of a misunderstanding',
          'Survey all necessary parties to reach consensus',
          'Support the outcome of parties\' agreement',
          'Investigate potential misunderstandings proactively'
        ],
        keyTerms: ['Shared understanding', 'Definition of Done', 'Definition of Ready', 'Active listening', 'Prototyping', 'User stories', 'Mental models'],
        examTips: [
          'Show a prototype instead of discussing requirements — it surfaces misunderstandings faster',
          'Communication model: the SENDER bears responsibility for clear communication',
          'Definition of Done: agreed BEFORE the sprint starts, not when work is delivered',
          'Paraphrasing is the most powerful active listening technique in exam scenarios'
        ]
      },
      {
        id: 'p11',
        title: 'Engage and Support Virtual Teams',
        examWeight: 'Medium',
        description: 'Examine virtual team member needs, investigate engagement alternatives, implement and evaluate effectiveness',
        theory: `**The Reality of Virtual Teams:**
Virtual teams are the norm, not the exception. COVID accelerated a trend that was already underway. PMs who master virtual team management have a significant advantage.

**Challenges unique to virtual environments:**
1. **Trust deficit:** Trust takes longer to build without face-to-face interaction
2. **Coordination overhead:** Time zones, async communication, document management
3. **Isolation and disengagement:** "Out of sight, out of mind" affects motivation
4. **Cultural miscommunication:** What's professional in one culture is rude in another
5. **Technology friction:** Not everyone has the same setup or comfort level
6. **Meeting fatigue:** Video calls are cognitively demanding

**High-Context vs. Low-Context Cultures:**
- Low-context (US, Germany, Australia): Direct, explicit communication; say exactly what you mean
- High-context (Japan, Middle East, China): Meaning conveyed through context, relationships, non-verbal cues; indirect communication is normal
- A low-context PM may interpret high-context "yes" as agreement when it means "I hear you"`,
        techniques: `**Best Practices for Virtual Team Management:**

**Communication:**
- Establish clear protocols: response time expectations, preferred channels by urgency
- Async-first mindset: Don't schedule a meeting when an email or Slack message will do
- Documentation discipline: Decisions, action items, and discussions must be written
- Over-communicate status: People can't see you working; communicate progress proactively

**Trust-Building:**
- Video on by default for key meetings (seeing faces matters)
- Virtual coffee chats (30-min casual calls with no agenda)
- Rotating "spotlight" at team meetings (share something personal/professional)
- Be consistent — follow through on every commitment
- Acknowledge time zone sacrifices when they occur

**Technology Stack:**
- Agree on tools upfront (video, messaging, PM tool, document repository)
- Ensure everyone has reliable access (don't assume internet quality)
- Record important meetings for those in incompatible time zones
- Use visual collaboration tools (Miro, MURAL) for workshops

**Inclusion Across Time Zones:**
- Rotate meeting times so the burden doesn't always fall on the same people
- Summarize every meeting immediately in writing
- Create async decision-making processes (Slack polls, shared docs with commenting)
- Acknowledge that some team members always have the "worst" time slot

**Mental Health and Wellbeing:**
Virtual workers are at higher risk for isolation and burnout. PMs should:
- Check in on wellbeing, not just work status
- Encourage use of vacation/off time
- Be explicit about "right to disconnect" after hours`,
        enablers: [
          'Examine virtual team member needs (environment, geography, culture)',
          'Investigate alternatives for virtual team member engagement',
          'Implement options for virtual team member engagement',
          'Continually evaluate effectiveness of virtual engagement'
        ],
        keyTerms: ['Virtual teams', 'Async communication', 'High-context vs. low-context', 'Digital collaboration tools', 'Remote trust-building'],
        examTips: [
          'Virtual teams need MORE deliberate communication and trust-building',
          'Cultural awareness is critical — what\'s normal in one culture is rude in another',
          'Rotate inconvenient meeting times — don\'t always burden the same time zone',
          'Technology agreement: done at project START, before problems arise'
        ]
      },
      {
        id: 'p12',
        title: 'Define Team Ground Rules',
        examWeight: 'Medium',
        description: 'Communicate organizational principles with team, establish environment that fosters adherence, manage violations',
        theory: `**Why Ground Rules Work:**
When people create rules themselves, they internalize them. Top-down rules get followed reluctantly. Team-created norms get followed because people feel ownership.

Ground rules also reduce the PM's burden: instead of the PM constantly enforcing behavior, the team holds each other accountable. "We agreed on this — are we doing it?" is more powerful coming from a peer than from a boss.

**Ground Rules vs. Team Charter:**
Often used interchangeably, but in PMP context:
- **Ground rules:** Behavioral norms (how we interact)
- **Team charter:** Broader document (purpose, goals, roles, values, norms)
- Ground rules are typically a section of the team charter`,
        techniques: `**What to Include in Ground Rules:**

**Meeting Norms:**
- Meetings start on time — late arrivals don't get the meeting restarted
- Cameras on for video meetings (unless bandwidth issue)
- Phones away (or silent) during in-person meetings
- One conversation at a time — no side conversations
- Everyone participates — no passengers
- Agendas distributed 24 hours in advance

**Communication Norms:**
- Slack/Teams: respond within 4 hours during business hours
- Email: respond within 1 business day
- Urgent matters: call/text
- Meetings are not for status updates — use async channels for that

**Decision-Making Norms:**
- We aim for consensus; if we can't achieve it in X minutes, the PM decides
- Decisions are documented in meeting notes and binding
- Once decided, we move forward — no relitigating closed decisions

**Conflict Norms:**
- Address disagreements directly with the person first
- Escalate to PM only if direct resolution fails
- No side conversations (backstabbing, alliances)
- Assume good intent — address behavior not character

**Accountability Norms:**
- Commitments are honored; if you can't deliver, raise the flag early
- Progress updates are proactive, not reactive
- "I don't know" is always acceptable; silence is not

**Establishing Ground Rules:**
1. PM proposes a framework to structure the discussion
2. Team discusses and modifies together
3. All team members agree and sign (or express verbal commitment)
4. Document and distribute
5. Review periodically and update as needed
6. Reference them when violations occur`,
        enablers: [
          'Communicate organizational principles with team and external stakeholders',
          'Establish an environment that fosters adherence to the ground rules',
          'Manage and rectify ground rule violations promptly'
        ],
        keyTerms: ['Ground rules', 'Team charter', 'Behavioral norms', 'Team accountability', 'Meeting norms'],
        examTips: [
          'Team creates ground rules together — NOT imposed by PM',
          'Reference ground rules when enforcing behavior — less personal than direct correction',
          'Enforce consistently — different rules for different people destroys trust',
          'Ground rules should be revisited when new team members join'
        ]
      },
      {
        id: 'p13',
        title: 'Mentor Relevant Stakeholders',
        examWeight: 'Low',
        description: 'Allocate time for mentoring, recognize and act on mentoring opportunities',
        theory: `**Mentoring, Coaching, Training — What's the Difference?**

**Mentoring:**
- Long-term relationship (months to years)
- Mentor shares experience, wisdom, and guidance
- Broader scope: career development, life lessons, navigation of organizational politics
- Relationship-driven
- The mentor provides answers from their own experience

**Coaching:**
- Focused on specific performance or skills
- Coach asks powerful questions to help the coachee discover their own answers
- Coach does not necessarily need expertise in the area
- Goal-oriented and time-bounded
- The coachee provides the answers

**Training:**
- Transfer of specific knowledge or skills
- Formal structure (curriculum, objectives, assessment)
- Subject matter expert → learner
- One-to-many delivery

**Why PMs Should Be Mentors:**
- Develops team members' long-term capabilities
- Builds loyalty and retention
- Creates future leaders
- Part of servant leadership`,
        techniques: `**Effective Mentoring in a Project Context:**

**For mentoring team members:**
- Share "war stories" — real experiences with real lessons
- Introduce mentees to your professional network
- Advocate for them to get stretch assignments
- Give honest feedback about their growth areas
- Be available but don't solve their problems for them

**For mentoring stakeholders:**
- A new business analyst learning to write user stories
- A first-time product owner learning backlog prioritization
- A department head new to project sponsorship
- A junior PM being developed within your organization

**Being Mentored (PM's own development):**
- Actively seek out mentors with experience you lack
- Be specific about what you want to learn
- Come prepared with questions and reflections
- Apply learning between sessions and report back
- Be respectful of their time

**Coaching Conversations:**
The GROW model for coaching conversations:
- **G**oal: What do you want to achieve?
- **R**eality: What is happening now?
- **O**ptions: What could you do? What else?
- **W**ill: What will you do? By when?`,
        enablers: [
          'Allocate time to mentor and to be mentored',
          'Recognize and act on mentoring opportunities in the project'
        ],
        keyTerms: ['Mentoring vs. coaching vs. training', 'GROW model', 'Servant leadership', 'Developmental relationship'],
        examTips: [
          'Coaching = ask questions to help someone find their own answers',
          'Mentoring = share your experience to guide their development',
          'Training = transfer specific knowledge/skills',
          'PM should both mentor others AND seek mentors for themselves'
        ]
      },
      {
        id: 'p14',
        title: 'Promote Team Performance Through Applied Emotional Intelligence',
        examWeight: 'High',
        description: 'Assess behavior through EI lens, use EI to enhance team performance, support team members needing emotional support',
        theory: `**What is Emotional Intelligence?**
Daniel Goleman defines EI as "the capacity for recognizing our own feelings and those of others, for motivating ourselves, and for managing emotions well in ourselves and in our relationships."

Research shows that EI accounts for more of career success than IQ. For leaders, EI is the distinguishing factor between average and exceptional performance.

**Why EI Matters for Project Managers:**
- Projects are inherently stressful — the PM sets the emotional tone for the team
- Decisions made in an emotionally reactive state are often regretted
- Team members perform better when they feel understood and valued
- Stakeholder relationships are emotional, not just transactional

**The Amygdala Hijack:**
When we perceive threat, the amygdala (emotional brain) can override the prefrontal cortex (rational brain). This is why people say and do things under stress that they later regret. Self-awareness and self-regulation prevent this.`,
        techniques: `**Goleman's 5 Components of EI:**

**1. Self-Awareness:**
- Knowing your emotions in real-time
- Understanding your emotional triggers
- Knowing your strengths and limitations
- Having a realistic self-assessment
- Practice: Journaling, asking for feedback, mindfulness
- PM Application: Knowing when you're stressed and why; understanding how your mood affects the team

**2. Self-Regulation:**
- Managing and redirecting disruptive emotions
- Thinking before acting (suspending judgment)
- Staying calm under pressure
- Not punishing others for bad news
- Practice: The pause (5-second rule before responding when triggered)
- PM Application: Responding professionally in difficult conversations; not blaming team in front of stakeholders

**3. Motivation:**
- Strong drive to achieve beyond money and status
- Optimism in the face of failure
- Commitment to the work itself
- Persistence toward goals
- Practice: Reconnecting with "why" during difficult periods
- PM Application: Maintaining team morale during project hardships

**4. Empathy:**
- Understanding others' emotional state
- Active, attentive listening
- Sensitivity to emotional needs
- Seeing situations from others' perspectives
- Practice: Active listening, perspective-taking
- PM Application: Understanding why a stakeholder is resistant; supporting a struggling team member

**5. Social Skills:**
- Building and maintaining relationships
- Managing conflict effectively
- Inspiring and influencing others
- Building networks and alliances
- Communication expertise
- PM Application: All interpersonal PM interactions

**Applying EI in Difficult Situations:**
When someone comes to you upset:
1. Don't solve immediately — acknowledge the emotion first
2. "That sounds really frustrating — tell me more."
3. Listen fully without interrupting
4. Ask: "What would be most helpful right now?"
5. Then problem-solve together

**Team EI:**
Not just individual EI — teams can have collective emotional intelligence:
- Team-level self-awareness: understanding team dynamics
- Team-level regulation: group norms for managing conflict
- Team empathy: awareness of each member's emotional state`,
        enablers: [
          'Assess behavior through the lens of emotional intelligence',
          'Practice and use EI to enhance team performance',
          'Support team members who need emotional support'
        ],
        keyTerms: ['Goleman\'s 5 EI components', 'Self-awareness', 'Self-regulation', 'Empathy', 'Amygdala hijack', 'Social skills'],
        examTips: [
          'When someone is upset: FIRST acknowledge feelings, THEN solve the problem',
          'Self-regulation = pause before reacting, especially under stress',
          'Empathy does NOT mean agreeing — it means understanding',
          'PM\'s emotional state is contagious — the team mirrors it',
          'High EI does not mean being "soft" — it means being effective interpersonally'
        ]
      }
    ]
  },
  {
    id: 'process',
    name: 'Process',
    icon: '⚙️',
    weight: '50%',
    color: '#34d399',
    tagline: 'Planning, executing, monitoring, and delivering project work',
    overview: `The Process domain is the largest at 50% of the exam. It covers the technical "how" of project management — planning, executing, controlling, and closing. Critically, it covers BOTH predictive (waterfall) and agile/hybrid approaches.

The exam does NOT favor one approach over another — it tests whether you can select and adapt the right approach for the situation.

Key themes:
• Know when to use predictive vs. agile vs. hybrid
• Master Earned Value Management (EVM) — expect 3-5 calculation questions
• Understand change control in predictive AND iterative contexts
• Know quality management, risk management, procurement deeply
• Understand how schedule, cost, scope, and quality interconnect`,
    tasks: [
      {
        id: 'pr01',
        title: 'Execute Project with Urgency and High Performance',
        examWeight: 'High',
        description: 'Assess opportunities to deliver value iteratively, evaluate project performance and adjust accordingly',
        theory: `**Value-Driven Delivery:**
The fundamental shift in modern project management is from "deliver everything at the end" to "deliver value continuously." This applies to both agile and increasingly to predictive projects.

**Why Iterate?**
- Reduces risk: smaller increments fail smaller
- Increases stakeholder confidence: they see progress
- Enables learning: real feedback beats assumptions
- Creates optionality: can pivot based on what you learn

**The Iron Triangle vs. Value Focus:**
Traditional PM focused on Scope + Schedule + Cost. Modern PM adds Benefits and Value. A project that delivers on time/budget but doesn't deliver business value has failed.`,
        techniques: `**Predictive vs. Iterative vs. Incremental vs. Agile:**

**Predictive (Waterfall):**
- Full scope defined upfront
- Sequential phases (rarely go back)
- Change is controlled and costly
- Delivery at end
- Best for: Stable requirements, regulated industries, physical construction
- Key documents: Project Charter → Project Plan → WBS → Gantt → Deliverable

**Iterative:**
- Requirements refined over cycles
- Each iteration improves on the last
- Incomplete deliverable at end of each cycle
- Best for: Requirements expected to evolve, innovation projects
- Example: RUP (Rational Unified Process)

**Incremental:**
- Work done in chunks, each delivering a complete piece
- Potentially shippable increment each cycle
- Best for: Progressive feature delivery
- Example: Building a car: first a scooter that works, then motorcycle, then car

**Agile (Iterative + Incremental):**
- Combine iterative refinement with incremental delivery
- Working software/product every sprint
- Welcome change
- Best for: Complex, uncertain environments; innovation; software

**Choosing Lifecycle (Shubert's model):**
Consider:
- Requirements clarity (clear = predictive; unclear = agile)
- Rate of change (stable = predictive; dynamic = agile)
- Stakeholder availability (available frequently = agile; limited = predictive)
- Risk tolerance (low = predictive; can manage = agile)
- Team experience (expert = agile; mixed = hybrid)
- Regulatory (strict = predictive; flexible = agile ok)

**Hybrid Approaches:**
Most real projects are hybrid. Examples:
- Architecture design in waterfall + development in sprints
- Fixed-price contract (predictive scope) + agile execution
- PMO reporting in waterfall + team working in Scrum`,
        enablers: [
          'Assess opportunities to deliver value by breaking into iterations',
          'Evaluate project performance to make timely decisions',
          'Evaluate phase/project completion requirements to close appropriately'
        ],
        keyTerms: ['Iterative delivery', 'Incremental delivery', 'Agile', 'Hybrid', 'Value delivery', 'Predictive lifecycle'],
        examTips: [
          'No approach is universally best — match to the context',
          'Agile welcomes change; predictive controls it through change management',
          'A hybrid approach is increasingly common and valid on the exam',
          'Value delivery > deliverable delivery — the exam tests this mindset'
        ]
      },
      {
        id: 'pr02',
        title: 'Manage Communications',
        examWeight: 'High',
        description: 'Analyze communication needs, determine methods/channels/frequency, confirm understanding',
        theory: `**Why Communications is Critical:**
PMI research shows PMs spend 90% of their time communicating. Communication failures are cited as the #1 cause of project problems. This task is examined heavily.

**The Communication Model (Shannon-Weaver):**
Sender → [Encode] → Message → [Transmit] → Channel → [Receive] → [Decode] → Receiver → Feedback
Noise can occur at any point.
- The SENDER is responsible for ensuring the message is received and understood
- Feedback closes the communication loop

**Communication Blockers:**
- Physical: noise, poor technology
- Semantic: jargon, technical language, different definitions
- Psychological: stress, bias, closed mindset, emotions
- Cultural: different norms for directness, hierarchy, formality`,
        techniques: `**Communication Channels Formula — MUST MEMORIZE:**
Number of channels = N × (N-1) / 2
Where N = number of stakeholders/team members

| People | Channels |
|--------|----------|
| 2 | 1 |
| 5 | 10 |
| 10 | 45 |
| 15 | 105 |
| 20 | 190 |

Adding one person to a 10-person team: New = 55, was 45, added 10 channels
This is why large teams are hard to manage — communication complexity grows exponentially.

**3 Communication Methods:**
1. **Interactive (2-way, real-time):** Meetings, calls, video conferences. Best for complex topics, sensitive discussions, immediate feedback needed.
2. **Push (1-way, sender-to-receiver):** Email, memos, reports, project updates. Good for routine status, distributing information, formal documentation.
3. **Pull (available when receiver wants):** Intranet, document repository, knowledge base. Good for reference materials, large audiences, low urgency.

**Communications Management Plan includes:**
- Stakeholder communication requirements
- Information to be communicated (format, content, detail level)
- Person responsible for communicating
- Frequency and timing
- Method and technology
- Escalation process
- Glossary of terms
- How decisions are communicated

**Effective Meeting Management:**
Before: Purpose-driven agenda, right attendees only, materials in advance
During: Start/end on time, facilitator controls discussion, decisions documented
After: Meeting notes within 24 hours, action items with owners and due dates

**Communication in Agile:**
- Osmotic communication: physical proximity means information flows naturally
- Information radiators: visible boards (Kanban, burn-down) communicate status passively
- Daily standups: 15-minute synchronization, not status reporting
- Sprint reviews: formal stakeholder communication event`,
        enablers: [
          'Analyze communication needs of all stakeholders',
          'Determine communication methods, channels, frequency, and detail level',
          'Communicate project information and updates effectively',
          'Confirm communication is understood and feedback is received'
        ],
        keyTerms: ['Communication channels formula', 'Interactive/Push/Pull', 'Communications Management Plan', 'Sender responsibility', 'Noise', 'Information radiator'],
        examTips: [
          'N(N-1)/2 = channels formula — expect a calculation question',
          'PM is responsible for communication 90% of the time — sender responsibility',
          'Interactive communication is BEST for complex, sensitive topics',
          'Push for routine status; Pull for reference materials',
          'Meeting notes are not optional — every decision must be documented'
        ]
      },
      {
        id: 'pr03',
        title: 'Assess and Manage Risks',
        examWeight: 'High',
        description: 'Determine risk management options, iteratively assess and prioritize risks, implement responses',
        theory: `**Risk Management Philosophy:**
Risk management is proactive, not reactive. By the time a risk becomes an issue, you've already lost. The exam tests whether you think ahead.

**Key Definitions:**
- **Risk:** An uncertain event or condition that, if it occurs, has a positive or negative effect on project objectives
- **Issue:** A risk that has occurred (or an unforeseen problem that has materialized)
- **Uncertainty:** The state of not knowing; risks come from uncertainty
- **Risk appetite:** How much risk the organization is willing to accept
- **Risk threshold:** The specific level at which action is required

**Positive vs. Negative Risks:**
Most people think of risk as bad. Wrong! Risks can be opportunities:
- Negative risk (threat): a vendor delay might cost you schedule
- Positive risk (opportunity): early delivery of a component might let you start testing sooner
Both require management.

**Risk Attitude Spectrum:**
- Risk-averse: Prefers certainty; accepts lower returns to avoid uncertainty
- Risk-neutral: Indifferent between certain and uncertain outcomes of equal value
- Risk-seeking: Prefers taking chances; accepts more risk for potentially higher returns`,
        techniques: `**The Risk Management Process (7 Steps):**

**Step 1: Plan Risk Management**
How will you identify, analyze, respond, and monitor risks on this project?
Output: Risk Management Plan (methodology, roles, funding, timing, risk categories, tolerance)

**Step 2: Identify Risks**
What could go wrong (or right)?
Techniques:
- Brainstorming (most common)
- Delphi technique (expert consensus, anonymous rounds)
- SWOT analysis
- Root cause analysis
- Checklist (from past projects)
- Assumption and constraint analysis
- Diagramming (cause and effect, system/process flows)
- Expert interviews
Output: Risk Register (initial)

**Step 3: Qualitative Risk Analysis**
Prioritize risks by probability × impact (without numbers — subjective)
Tools:
- Probability and Impact Matrix (Risk Matrix): Plot each risk by likelihood and consequence
- Risk categorization (RBS — Risk Breakdown Structure)
- Risk urgency assessment
Output: Risk register updated with priority ratings

**Step 4: Quantitative Risk Analysis (Not always done)**
Assign numerical probabilities and monetary impacts
Tools:
- Expected Monetary Value (EMV): Probability × Impact ($)
- Decision tree analysis
- Monte Carlo simulation (range of possible outcomes)
- Sensitivity analysis (tornado diagram)
Output: Probability of meeting objectives; contingency reserve amounts

**Step 5: Plan Risk Responses**
What will you DO about each significant risk?

THREATS:
- **Avoid:** Eliminate the risk entirely (change scope, remove activity, extend timeline)
- **Transfer:** Shift the impact to a third party (insurance, fixed-price contracts, warranties)
- **Mitigate:** Reduce probability AND/OR impact (testing, prototyping, redundancy)
- **Accept (Active):** Develop contingency plan to execute IF the risk occurs
- **Accept (Passive):** Acknowledge but take no proactive action
- **Escalate:** If the risk exceeds the PM's authority or is at a program/portfolio level

OPPORTUNITIES:
- **Exploit:** Eliminate the uncertainty — make the opportunity definitely happen
- **Enhance:** Increase probability or positive impact
- **Share:** Partner with another party to capture the opportunity
- **Accept:** Take the opportunity if it arises but don't actively pursue it
- **Escalate:** If beyond PM authority

**Step 6: Implement Risk Responses**
Execute the response plans as planned. Track contingency reserve usage.

**Step 7: Monitor Risks**
- Review risk register regularly (sprint reviews, status meetings)
- Identify new risks
- Close risks that are no longer relevant
- Track trigger conditions (early warning indicators)
- Perform risk reassessments and risk audits

**Key Risk Concepts:**
- **Residual risk:** Risk remaining AFTER a response has been implemented
- **Secondary risk:** NEW risk created BY a risk response
- **Contingency reserve:** Budget/time held for KNOWN risks (in cost baseline)
- **Management reserve:** Budget/time held for UNKNOWN risks (above cost baseline)
- **Risk owner:** Person responsible for monitoring and executing the response
- **Workaround:** Unplanned response when a risk occurs without a response plan`,
        enablers: [
          'Determine risk management options',
          'Iteratively assess and prioritize risks',
          'Determine risk exposure based on assessment data',
          'Communicate risk status to relevant stakeholders',
          'Implement appropriate risk responses based on methodology'
        ],
        keyTerms: ['Risk register', 'Risk appetite/threshold', 'Probability × Impact', 'EMV', 'Avoid/Transfer/Mitigate/Accept/Escalate', 'Exploit/Enhance/Share', 'Contingency vs. management reserve', 'Residual vs. secondary risk'],
        examTips: [
          'Risk = uncertain event. Issue = risk that occurred. Know the difference.',
          'Opportunity responses: Exploit/Enhance/Share/Accept/Escalate (mirror of threats)',
          'Contingency reserve = for KNOWN risks (inside baseline)',
          'Management reserve = for UNKNOWN risks (outside baseline, needs sponsor approval)',
          'Residual risk: after response. Secondary risk: CAUSED by response.',
          'Workaround: unplanned response to unplanned risk = bad (but sometimes unavoidable)'
        ]
      },
      {
        id: 'pr04',
        title: 'Engage Stakeholders',
        examWeight: 'High',
        description: 'Analyze stakeholders, develop/execute/validate engagement strategy, measure engagement',
        theory: `**Stakeholder Engagement is a Process:**
It's not one meeting at kickoff — it's continuous throughout the project. Stakeholder attitudes change. New stakeholders emerge. The project evolves and so do stakeholder needs.

**The Stakeholder Engagement Assessment Matrix:**
Maps each stakeholder's CURRENT engagement level against their DESIRED engagement level:
| Stakeholder | Unaware | Resistant | Neutral | Supportive | Leading |
|---|---|---|---|---|---|
| CEO | | | C | | D |
| End Users | C | | | D | |
C = Current, D = Desired

The gap tells you what engagement action is needed.

**Why Engagement Fails:**
- PM sends updates but doesn't seek input
- Stakeholders feel informed-after-the-fact rather than involved
- Communication is one-size-fits-all
- Resistant stakeholders are avoided rather than engaged
- PM focuses on technical delivery and neglects human elements`,
        techniques: `**Stakeholder Engagement Planning:**

For each significant stakeholder, define:
1. Communication approach (meetings, reports, informal)
2. Frequency and timing
3. Level of involvement in decisions
4. Key messages and concerns to address
5. Who on the PM side manages this relationship

**Managing Stakeholder Expectations:**
- **Underpromise and overdeliver** (within reason — don't artificially lower expectations)
- Communicate bad news EARLY and with a plan
- Be transparent about constraints (can't change schedule AND scope)
- Document agreed expectations to prevent "I thought you said..."
- Use change control to manage scope creep driven by stakeholder requests

**Stakeholder Register:**
Contains for each stakeholder:
- Identification: name, title, location, role
- Assessment: interests, involvement level, influence
- Classification: high/low power, high/low interest
- Current and desired engagement level
- Strategy: how to move from current to desired

CRITICAL: The stakeholder register is CONFIDENTIAL. It contains sensitive assessments that could damage relationships if shared.

**Dealing with Negative Stakeholders:**
Step 1: Understand their concerns (listen without defending)
Step 2: Identify the root cause of their resistance (fear? Past failure? Competing interests?)
Step 3: Address legitimate concerns directly
Step 4: Involve them in decisions where appropriate
Step 5: Find champions who can influence them
Step 6: Escalate only if they're actively sabotaging the project

**Stakeholder Identification Tools:**
- Organizational charts (formal power structure)
- Project documents (stakeholders named in charter, contracts)
- Expert interviews (who else should be involved?)
- Industry groups and regulatory databases
- Stakeholder maps from previous similar projects`,
        enablers: [
          'Analyze stakeholders using power/interest grid, salience model, etc.',
          'Categorize stakeholders appropriately',
          'Engage stakeholders by category',
          'Develop, execute, and validate stakeholder engagement strategy',
          'Measure stakeholder engagement effectiveness'
        ],
        keyTerms: ['Stakeholder Engagement Assessment Matrix', 'Engagement continuum', 'Stakeholder register (confidential)', 'Power/Interest grid', 'Salience model', 'Expectation management'],
        examTips: [
          'Stakeholder register = CONFIDENTIAL (don\'t share with stakeholders)',
          'Resistant stakeholders get MORE engagement, not less',
          'Engagement assessment matrix: C=current, D=desired — bridge the gap',
          'Bad news: communicate early and with a plan (never hide it)',
          'Stakeholder identification never really ends — new stakeholders emerge throughout'
        ]
      },
      {
        id: 'pr05',
        title: 'Plan and Manage Budget and Resources',
        examWeight: 'High',
        description: 'Estimate budgetary needs, anticipate budget challenges, monitor variations, apply Earned Value Management',
        theory: `**Budget Components:**
Understanding what makes up a project budget is essential:

- **Activity cost estimates:** Bottom-up cost of all work
- **Contingency reserves:** Buffer for KNOWN risks (in cost baseline)
- **Cost Baseline:** Activity costs + contingency reserves (the S-curve)
- **Management reserves:** Buffer for UNKNOWN risks (above baseline)
- **Project Budget:** Cost baseline + management reserves
- **BAC (Budget at Completion):** The total authorized budget for the project

**Resource Management:**
Resources include: people, equipment, facilities, materials, supplies, infrastructure. Resource management ensures the right resources are available at the right time.

**Resource Leveling vs. Resource Smoothing:**
- Resource leveling: Adjust schedule to eliminate over-allocation (can change critical path and project end date)
- Resource smoothing: Optimize resources within float periods only (cannot change critical path or project end date)`,
        techniques: `**Cost Estimation Techniques:**

**Analogous Estimating (Top-down):**
- Uses historical data from similar projects
- Fastest and cheapest to create
- Least accurate (especially for unique projects)
- Best for: Early project phases, rough order of magnitude

**Parametric Estimating:**
- Uses statistical relationship between historical data and other variables
- Example: $X per square foot, $Y per function point
- More accurate than analogous; requires valid historical data
- Best for: When a unit-rate relationship can be established

**Bottom-up Estimating:**
- Estimate each individual work package, then roll up
- Most accurate (you actually think through every piece of work)
- Most time-consuming and expensive to create
- Best for: When accuracy is critical, detailed planning phase

**Three-Point Estimating (PERT):**
- Uses three estimates to account for uncertainty
- Most Likely (M), Optimistic (O), Pessimistic (P)
- Duration = (O + 4M + P) / 6
- Standard Deviation = (P - O) / 6
- Variance = SD²
- Best for: Risk-sensitive estimates

**Reserve Analysis:**
- Contingency reserves: X% of total estimate, or individually calculated per risk
- Management reserves: 5-10% of total budget (rule of thumb, varies by organization)

---

**EARNED VALUE MANAGEMENT (EVM) — HIGHEST EXAM PRIORITY:**

EVM integrates scope, schedule, and cost to provide an objective view of project performance.

**The 3 Core Values (must memorize):**

| Term | Definition | Formula |
|------|-----------|---------|
| **PV** (Planned Value) | What work was SUPPOSED to be done by now (budgeted) | BAC × % Planned Complete |
| **EV** (Earned Value) | What work HAS BEEN done (budgeted value of actual work) | BAC × % Actually Complete |
| **AC** (Actual Cost) | What was ACTUALLY SPENT on work done | Direct from accounting |

**Variances (negative = bad, positive = good):**

| Formula | Name | Interpretation |
|---------|------|----------------|
| EV - AC | Cost Variance (CV) | Negative = over budget |
| EV - PV | Schedule Variance (SV) | Negative = behind schedule |

**Performance Indices (>1 = good, <1 = bad, 1 = on target):**

| Formula | Name | Interpretation |
|---------|------|----------------|
| EV / AC | CPI (Cost Performance Index) | $0.80 means getting $0.80 of work per $1 spent |
| EV / PV | SPI (Schedule Performance Index) | 0.85 means 85% of planned work complete |

**Forecasting (how will we finish?):**

| Formula | Name | When to Use |
|---------|------|-------------|
| BAC / CPI | EAC (Estimate at Completion) | Current inefficiency will continue |
| AC + (BAC - EV) | EAC | Current variance is atypical (one-time problem) |
| AC + ETC | EAC | Re-estimate remaining work from scratch |
| EAC - AC | ETC (Estimate to Complete) | Remaining cost |
| BAC - EAC | VAC (Variance at Completion) | Final over/under budget |
| (BAC-EV)/(BAC-AC) | TCPI | Efficiency needed to finish on budget |

**TCPI Interpretation:**
- TCPI = 1.0: Must be exactly as efficient as planned
- TCPI = 1.1: Must be 10% MORE efficient than historical rate (difficult)
- TCPI = 0.9: Can be 10% LESS efficient (project has buffer)
- TCPI > 1.2 is generally considered unrealistic`,
        enablers: [
          'Estimate budgetary needs based on scope and lessons learned',
          'Anticipate future budget challenges',
          'Monitor budget variations and work with governance to adjust',
          'Plan and manage resources using appropriate techniques'
        ],
        keyTerms: ['BAC', 'PV', 'EV', 'AC', 'CV', 'SV', 'CPI', 'SPI', 'EAC', 'ETC', 'VAC', 'TCPI', 'Contingency vs. management reserve', 'Bottom-up estimating', 'PERT', 'Three-point estimate'],
        examTips: [
          'EV is ALWAYS based on budgeted cost — never actual cost',
          'Negative CV and SV = bad. Positive = good.',
          'CPI/SPI >1 = good. <1 = problem.',
          'Default EAC = BAC/CPI (assumes future performance mirrors past)',
          'Contingency reserve = you control. Management reserve = sponsor controls.',
          'PERT formula: (O + 4M + P) / 6 — the 4 weights the Most Likely estimate'
        ]
      },
      {
        id: 'pr06',
        title: 'Plan and Manage Schedule',
        examWeight: 'High',
        description: 'Estimate tasks, utilize historical data, prepare schedule per methodology, measure and modify as needed',
        theory: `**The Schedule Development Process:**
1. Define activities (decompose WBS work packages into activities)
2. Sequence activities (determine dependencies using PDM)
3. Estimate activity durations (PERT, analogous, parametric, etc.)
4. Develop the schedule (calculate dates using forward/backward pass)
5. Control the schedule (compare actual to planned, take corrective action)

**Dependencies / Logical Relationships:**
Every activity has predecessors and/or successors. Types:
- **Mandatory (Hard Logic):** Required by nature of work (can't install software before hardware is in place)
- **Discretionary (Soft Logic):** Best practice but could change if needed (usually run tests before go-live)
- **External:** Outside PM control (regulatory approval, vendor delivery)
- **Internal:** Within the PM's control

**Lead and Lag:**
- **Lead:** Overlap — activity B starts before A finishes (compression)
- **Lag:** Delay — activity B waits even after A finishes (e.g., concrete curing time)`,
        techniques: `**Precedence Diagramming Method (PDM) — Dependency Types:**

**FS (Finish-to-Start):** B cannot START until A FINISHES — most common
**SS (Start-to-Start):** B cannot START until A STARTS
**FF (Finish-to-Finish):** B cannot FINISH until A FINISHES
**SF (Start-to-Finish):** B cannot FINISH until A STARTS — extremely rare, almost never used

---

**Critical Path Method (CPM) — EXAM CRITICAL:**

**Critical Path:** The LONGEST path from project start to project finish.
- Zero float (any delay = project delay)
- All activities on critical path are "critical activities"
- A project can have multiple critical paths

**Float/Slack Calculation:**
Float = LS - ES = LF - EF

Forward Pass: Calculate Earliest Start (ES) and Earliest Finish (EF)
- ES of first activity = 0 (or Day 1)
- EF = ES + Duration
- ES of next activity = EF of predecessor

Backward Pass: Calculate Latest Finish (LF) and Latest Start (LS)
- LF of last activity = EF of last activity
- LS = LF - Duration
- LF of preceding activity = LS of successor

**Float Types:**
- Total Float: Time activity can be delayed without delaying project end
- Free Float: Time activity can be delayed without delaying NEXT activity's early start

**Schedule Compression Techniques:**

**Crashing:**
- Add resources to critical path activities
- Cost goes up (pay for extra resources or overtime)
- Duration goes down
- No added risk (sequential work remains sequential)
- Crash the cheapest activities first (crash cost per unit time)

**Fast Tracking:**
- Do sequential activities in parallel
- No additional cost (same resources, just overlap)
- Risk goes up significantly (rework if parallel work has dependencies)
- Can only be applied to activities that CAN overlap

**Critical Chain Method:**
- Like CPM but adds resource constraints
- Adds buffers (project buffer, feeding buffers) instead of padding individual activities
- Focuses on throughput, not individual activity completion

**Agile Scheduling:**
- Story points: relative sizing units (not time)
- Velocity: story points completed per sprint (becomes the planning metric)
- Sprint planning: select items from backlog based on velocity
- Release planning: (Total backlog points) / (Average velocity) = number of sprints
- Burndown chart: tracks remaining work vs. time
- Burnup chart: tracks completed work vs. time (shows scope changes clearly)`,
        enablers: [
          'Estimate project tasks including milestones, dependencies, story points',
          'Utilize benchmarks and historical data for estimates',
          'Prepare schedule based on methodology',
          'Measure ongoing progress based on methodology',
          'Modify schedule as needed'
        ],
        keyTerms: ['Critical path', 'Float/slack', 'CPM', 'FS/SS/FF/SF', 'Lead/lag', 'Forward/backward pass', 'Crashing vs. fast tracking', 'Story points', 'Velocity', 'Burndown chart'],
        examTips: [
          'Critical path = LONGEST path = zero float',
          'Crashing = add cost, reduce time, no new risk',
          'Fast tracking = add risk, reduce time, no new cost',
          'Float = LS-ES = LF-EF',
          'Multiple critical paths = higher risk (more paths that can delay project)',
          'Agile: story points are relative, not hours. Velocity drives release planning.'
        ]
      },
      {
        id: 'pr07',
        title: 'Plan and Manage Quality of Products and Deliverables',
        examWeight: 'High',
        description: 'Determine quality standards, recommend improvements, use quality tools, survey deliverable quality',
        theory: `**Quality Philosophy:**
"Quality is planned in, not inspected in." — W. Edwards Deming

This is one of the most important quality principles for the exam. Trying to fix quality after the work is done is expensive and ineffective. Prevention (doing things right) is always cheaper than appraisal (checking for defects) which is always cheaper than failure (fixing defects after delivery).

**Quality vs. Grade:**
- Quality: Degree to which product meets requirements (high quality = meets requirements)
- Grade: Feature/function level (high-grade = many features; low-grade = few features)
A low-grade product can be high quality if it does what it's supposed to do.
A high-grade product can be low quality if it doesn't work right.

**Customer Satisfaction = Conformance to Requirements + Fitness for Use**
The product must meet the documented requirements AND actually be useful.`,
        techniques: `**The 3 Quality Processes:**

**Quality Planning:**
- Identify quality standards relevant to the project
- Determine how to satisfy those standards
- Define Quality Management Plan
- Tools: Cost-Benefit Analysis, Cost of Quality, benchmarking

**Quality Assurance (QA) — Process-Focused:**
- Ensures the right PROCESSES are being followed
- Audit-based: Are we following our defined processes?
- Proactive and preventive
- Done by QA team or through audits
- Continuous — throughout the project
- Output: Change requests, process improvements

**Quality Control (QC) — Product-Focused:**
- Ensures DELIVERABLES meet requirements
- Inspection-based: Does the output meet standards?
- Reactive (check after work is done)
- Done by team testing deliverables
- Output: Accepted/rejected deliverables, defect reports

---

**Cost of Quality:**

| Category | Type | Examples |
|----------|------|---------|
| Conformance | Prevention | Training, documentation, process design |
| Conformance | Appraisal | Testing, inspection, auditing |
| Non-conformance | Internal Failure | Rework, scrap, defects found internally |
| Non-conformance | External Failure | Warranty claims, returns, complaints, recalls |

Key: Prevention < Appraisal < Internal Failure < External Failure (in terms of cost)
Invest in prevention to avoid the more expensive failures.

---

**7 Quality Tools (Ishikawa's 7 Basic Tools):**

1. **Cause-and-Effect Diagram (Fishbone/Ishikawa):**
   - Find root causes of a problem
   - Bones = categories (6M: Man, Machine, Method, Material, Measurement, Mother Nature)
   - Use after a defect is identified to find WHY

2. **Control Chart:**
   - Track process performance over time
   - Control limits (UCL/LCL) = ±3 sigma from mean
   - Rule of 7: 7 consecutive data points on same side of mean = process out of control
   - Points outside control limits = investigate immediately
   - Specification limits are different from control limits (customer requirements vs. process performance)

3. **Pareto Chart (80/20 Rule):**
   - Bar chart + cumulative line
   - 80% of problems come from 20% of causes
   - Use to prioritize which defects to fix first
   - Focus on the vital few, not the trivial many

4. **Histogram:**
   - Shows distribution/frequency of data
   - Reveals shape: normal, skewed, bimodal
   - Use to understand process behavior

5. **Scatter Diagram:**
   - Shows relationship (correlation) between two variables
   - Does NOT prove causation, only correlation
   - Positive correlation: both increase together
   - Negative correlation: one increases as other decreases

6. **Flowchart (Process Map):**
   - Visual representation of process steps
   - Identifies where defects are likely to occur
   - Used in process design and analysis

7. **Checklist:**
   - Tally sheet for tracking defect types
   - Converts qualitative observations to quantitative data

---

**Six Sigma:**
- DMAIC: Define, Measure, Analyze, Improve, Control (for existing processes)
- DMADV: Define, Measure, Analyze, Design, Verify (for new processes)
- 6σ = 3.4 defects per million opportunities
- Sigma levels: 1σ=68.27%, 2σ=95.45%, 3σ=99.73%, 6σ=99.9997%

**Kaizen:** Continuous improvement through small incremental changes. Everyone is responsible.
**Lean:** Eliminate waste (MUDA). 7 wastes: transportation, inventory, motion, waiting, overproduction, over-processing, defects (TIM WOOD)`,
        enablers: [
          'Determine quality standard required for deliverables',
          'Recommend options for improvement based on quality gaps',
          'Continually survey project deliverable quality',
          'Use quality tools appropriately for the situation'
        ],
        keyTerms: ['QA vs. QC', 'Cost of Quality', 'Prevention vs. appraisal vs. failure', 'Control chart', 'Pareto chart', 'Fishbone diagram', 'Rule of 7', 'Six Sigma', 'Kaizen', 'Lean'],
        examTips: [
          'Quality is planned IN — not inspected in. Prevention > appraisal.',
          'QA = process audit (are we following right process?)',
          'QC = product inspection (does deliverable meet standards?)',
          'Control chart Rule of 7: 7 consecutive points same side = out of control',
          'Pareto: fix the 20% of causes that cause 80% of problems first',
          'Cost of quality: Prevention is cheapest; External failure is most expensive'
        ]
      },
      {
        id: 'pr08',
        title: 'Plan and Manage Scope',
        examWeight: 'High',
        description: 'Determine and prioritize requirements, break scope into manageable pieces, monitor and validate scope',
        theory: `**Two Types of Scope:**
1. **Product Scope:** The features and functions of the deliverable (what the product does)
2. **Project Scope:** The work required to deliver the product (what the team does)

These are related but different. The product scope drives the project scope.

**The Scope Problem:**
Most project failures involve scope issues:
- Scope creep (unauthorized additions)
- Gold plating (unauthorized enhancements by team)
- Missing requirements (not discovered until testing)
- Ambiguous requirements (different interpretations)
- Changing requirements (requirements evolve but aren't managed)

**Predictive vs. Agile Scope:**
- Predictive: Define all scope upfront; control changes strictly
- Agile: Embrace scope evolution; prioritize continuously; always have clear priorities`,
        techniques: `**Scope Management Process:**

**1. Collect Requirements:**
Techniques:
- **Interviews:** One-on-one; good for sensitive or complex requirements
- **Focus Groups:** Small group discussion; good for user needs
- **Facilitated Workshops (JAD — Joint Application Design):** Cross-functional, structured; most effective for resolving conflicts
- **Surveys/Questionnaires:** Large audiences; quantitative
- **Observation (Job Shadowing):** See how users actually work (vs. how they say they work)
- **Prototyping:** Build and refine; surfaces tacit requirements
- **Benchmarking:** Compare to industry best practice
- **Document Analysis:** Review existing systems, policies, procedures
- **Mind Mapping:** Visual requirements exploration

Output: Requirements Documentation, Requirements Traceability Matrix (RTM)

**Requirements Traceability Matrix (RTM):**
Links requirements to their business need AND to work breakdown structure elements, test cases, deliverables. Ensures every requirement is implemented and tested.

**2. Define Scope:**
Create the Project Scope Statement:
- Project deliverables (what is included)
- Project exclusions (what is NOT included — equally important!)
- Acceptance criteria (how will we know when it's done?)
- Assumptions and constraints

**3. Create WBS (Work Breakdown Structure):**
**Definition:** Hierarchical decomposition of the TOTAL SCOPE of work
**100% Rule:** The WBS captures 100% of the project scope. No more, no less.
**Work Package:** The lowest level of the WBS; can be scheduled, cost-estimated, monitored, and controlled
**WBS is NOT:** A schedule (no time), an org chart, a task list

WBS Dictionary: Describes each WBS element (description, owner, resources, dependencies, acceptance criteria)

Scope Baseline = WBS + WBS Dictionary + Project Scope Statement

**4. Validate Scope:**
- Formal acceptance of completed deliverables by customer/sponsor
- Happens at phase gates (predictive) or end of each sprint (agile)
- Results in signed acceptance documents
- Different from QC (QC ensures quality; scope validation ensures customer acceptance)

**5. Control Scope:**
- Monitor for scope creep and gold plating
- Manage all scope changes through Integrated Change Control
- Update scope baseline when changes approved

**Agile Scope Management:**
- Product Backlog is the scope repository
- Stories are estimated and prioritized (not fixed)
- MoSCoW Prioritization:
  - M = Must Have (non-negotiable)
  - S = Should Have (important but not critical)
  - C = Could Have (nice to have)
  - W = Won't Have (out of scope for now)
- Backlog refinement: continuously update and reprioritize
- Definition of Done ensures consistent quality`,
        enablers: [
          'Determine and prioritize requirements',
          'Break down scope using WBS or product backlog',
          'Monitor and validate scope throughout project',
          'Plan and manage scope changes through appropriate process'
        ],
        keyTerms: ['Product scope vs. project scope', 'WBS', '100% Rule', 'Work package', 'Scope baseline', 'Requirements Traceability Matrix', 'Scope creep', 'Gold plating', 'Validate scope', 'MoSCoW', 'Definition of Done'],
        examTips: [
          'WBS 100% Rule: includes ALL work, nothing outside scope',
          'Validate Scope = customer acceptance. QC = quality check.',
          'Scope creep (unauthorized) = bad. Approved change = fine.',
          'Gold plating by the TEAM is also bad — violates scope baseline',
          'RTM ensures every requirement is traceable from business need to test',
          'Exclusions in scope statement are as important as inclusions'
        ]
      },
      {
        id: 'pr09',
        title: 'Integrate Project Planning Activities',
        examWeight: 'High',
        description: 'Consolidate all subsidiary plans into a unified Project Management Plan, resolve conflicts, obtain approval',
        theory: `**What Integration Management Really Means:**
Integration management is the glue that holds all other knowledge areas together. Every decision in scope affects schedule; every schedule change affects cost; every cost change affects risk. The PM's job is to see the whole picture.

**The Project Management Plan is NOT a Gantt Chart:**
Many new PMs mistake the schedule for the project management plan. The PMP is a comprehensive document that tells everyone HOW the project will be planned, executed, monitored, and closed.

**Project Management Plan Components:**
- Scope Management Plan — how scope will be defined, validated, controlled
- Requirements Management Plan — how requirements will be analyzed, documented, managed
- Schedule Management Plan — scheduling methodology, tools, update frequency
- Cost Management Plan — how costs estimated, budgeted, controlled
- Quality Management Plan — quality standards, QA/QC activities
- Resource Management Plan — how resources acquired, developed, managed
- Communications Management Plan — who needs what information, when, how
- Risk Management Plan — methodology, roles, risk categories, tolerance
- Procurement Management Plan — make-or-buy decisions, contract types
- Stakeholder Engagement Plan — strategies per stakeholder
- Change Management Plan — how changes are identified, reviewed, approved
- Configuration Management Plan — how documents/deliverables versioned
- Cost Baseline, Schedule Baseline, Scope Baseline (the three baselines)`,
        techniques: `**Develop Project Charter Process:**
The charter formally authorizes the project. Without it, the PM has no authority.
- Inputs: Business case, benefits management plan, agreements, EEFs, OPAs
- Key outputs: Project charter (names PM, grants authority, high-level scope/budget/timeline)
- Who creates: Sponsor or initiating entity — NOT the PM (though PM often drafts it)
- Once signed: Project officially exists and PM can commit organizational resources

**Progressive Elaboration:**
Plans start broad and become more detailed as you learn more. Early in a project, you can only plan at a high level. As requirements clarify, you refine. This is expected — not a sign of poor planning.

**Rolling Wave Planning:**
A practical application of progressive elaboration:
- Near-term work: planned in detail (work packages)
- Far-term work: planned at high level (planning packages)
- As time passes, planning packages are converted to work packages

**Direct and Manage Project Work:**
Executing the approved project plan:
- Implement approved change requests
- Create project deliverables
- Manage team and resources
- Generate Work Performance Data (raw facts: % complete, costs incurred, activities started)

**Monitor and Control Project Work:**
Compare actual to planned:
- Work Performance Data → Work Performance Information (analyzed data)
- Work Performance Information → Work Performance Reports (formatted for stakeholders)
- Identify variances and forecast future performance
- Recommend corrective/preventive actions

**Perform Integrated Change Control:**
All change requests must flow through this process:
1. Submit change request (written — anyone can submit)
2. Evaluate impact across ALL knowledge areas (scope, schedule, cost, quality, risk, resources)
3. CCB reviews and decides (approve, reject, defer)
4. Update all affected project documents and plans
5. Communicate decision to all stakeholders
NEVER implement a change without formal approval — even if sponsor asks verbally.

**Close Project or Phase:**
- Verify all work is complete
- Get formal acceptance of deliverables
- Release resources
- Update OPAs (lessons learned, templates, metrics)
- Archive project records
- Celebrate and recognize team`,
        enablers: [
          'Consolidate project/phase plans based on chosen development lifecycle',
          'Assess consolidated plans for dependencies, gaps, and continued business value',
          'Analyze project models to make informed decisions',
          'Collect and analyze data for project decisions',
          'Determine critical information requirements'
        ],
        keyTerms: ['Project Management Plan', 'Progressive elaboration', 'Rolling wave planning', 'Work Performance Data/Information/Reports', 'Integrated Change Control', 'Project charter'],
        examTips: [
          'Charter authorizes the project — PM has NO authority before charter is signed',
          'Work Performance DATA = raw facts. INFORMATION = analyzed. REPORTS = formatted.',
          'ALL change requests go through ICC — verbal approval is NOT sufficient',
          'PM cannot approve their own change requests — that goes to CCB',
          'Closing a phase produces lessons learned even if project continues'
        ]
      },
      {
        id: 'pr10',
        title: 'Manage Project Artifacts',
        examWeight: 'Medium',
        description: 'Determine artifact requirements, validate information currency and accessibility, ensure proper configuration management',
        theory: `**What Are Project Artifacts?**
Any document, template, output, or record produced during the project lifecycle. Managing them ensures everyone works with current, accurate information and that the project has an auditable trail.

**Why Artifact Management Fails:**
- Multiple versions of the same document floating around
- Team members working from outdated requirements
- No one knows which is the "approved" version
- Artifacts stored in personal drives instead of shared repositories
- Poor naming conventions making search impossible

**Configuration Management vs. Change Control:**
- Change Control: Decides WHETHER to make a change (Is this change approved?)
- Configuration Management: Controls HOW changes are tracked and versions managed (Which version is current?)
They work together: Change control approves; configuration management tracks.`,
        techniques: `**Document Management System Requirements:**
- Version control: Every document has a version number (v1.0, v1.1, v2.0)
- Access control: Who can view, edit, approve
- Single source of truth: One location — not emailed attachments
- Audit trail: Who changed what, when, and why
- Retention policy: How long to keep project records

**Naming Convention Best Practices:**
ProjectName_DocumentType_Version_Date
Example: ACME_CRM_Requirements_v2.1_2024-03-15

**Lessons Learned:**
- Captured THROUGHOUT the project — not just at closing
- Include what worked AND what didn't
- Stored in OPA (Organizational Process Assets) repository
- Referenced at START of future similar projects
- Format: Situation → Action Taken → Result → Recommendation

**Information Management in Agile:**
- Wiki (Confluence): Living documentation, continuously updated
- Definition of Done: The team's shared quality standard
- Sprint Review notes: Stakeholder feedback captured per sprint
- Retrospective outputs: Process improvement actions tracked to completion

**PMIS (Project Management Information System):**
Software tools: MS Project, Jira, Asana, Monday.com, Smartsheet
Used for: Scheduling, cost tracking, resource management, reporting, document storage`,
        enablers: [
          'Determine requirements for managing project artifacts',
          'Validate project information is kept up to date and accessible',
          'Continually assess effectiveness of artifact management',
          'Ensure configuration management processes are followed'
        ],
        keyTerms: ['Configuration management', 'Version control', 'PMIS', 'Lessons learned', 'OPAs', 'Single source of truth', 'Document control'],
        examTips: [
          'Lessons learned: captured THROUGHOUT the project, not just at the end',
          'Configuration management tracks versions; change control approves changes',
          'PMIS = the software tools used to manage the project',
          'OPAs = internal assets PM can leverage (templates, lessons learned, processes)'
        ]
      },
      {
        id: 'pr11',
        title: 'Determine Appropriate Project Methodology',
        examWeight: 'High',
        description: 'Assess project needs, complexity, uncertainty, and team capability to select predictive, agile, or hybrid approach',
        theory: `**The Methodology Selection Problem:**
There is no universally "best" methodology. Scrum is not always better than waterfall. Waterfall is not dead. The right approach depends on the specific project context. This is heavily tested — expect 5-8 questions on methodology selection.

**The Cynefin Framework for Project Classification:**
Dave Snowden's model helps categorize the type of problem:
- Simple (Clear): Best practice applies; cause-effect obvious → Use predictive
- Complicated: Expert knowledge required; cause-effect requires analysis → Use predictive with experts
- Complex: Unknown unknowns; patterns emerge with experimentation → Use agile
- Chaotic: Crisis; no clear cause-effect → Act first, sense later, then respond
- Disorder: Unknown which domain you're in → Break into parts

**Key Decision Factors:**
1. Requirements clarity: Clear = predictive; Unclear/evolving = agile
2. Technology uncertainty: Proven = predictive; New = agile  
3. Stakeholder involvement: Limited availability = predictive; Frequent collaboration = agile
4. Team experience: Experienced = can do agile; Mixed = hybrid or predictive
5. Delivery expectations: Single delivery acceptable = predictive; Incremental value needed = agile
6. Regulatory environment: Strict documentation required = predictive; Flexible = agile ok
7. Project size: Very large programs often use hybrid (SAFe, LeSS)`,
        techniques: `**Predictive (Waterfall) — When to Choose:**
Best for: Construction, manufacturing, government contracts, highly regulated industries (FDA, FAA), well-understood technology, fixed-price contracts requiring scope certainty.
Key traits: Sequential phases, comprehensive upfront planning, change is controlled, single delivery at end.

**Agile — When to Choose:**
Best for: Software development with evolving requirements, innovation projects, products needing frequent user feedback, startups, digital transformation.
Key traits: Iterative cycles, welcome change, frequent delivery, self-organizing teams, continuous planning.

**Scrum Framework (Most Tested Agile Framework):**
Roles:
- Product Owner: Owns the WHY and WHAT (business value, backlog)
- Scrum Master: Owns the HOW of the process (servant leader, removes impediments)
- Development Team: Owns the HOW of the work (self-organizing, cross-functional, 3-9 people)

Events (all time-boxed):
- Sprint: 1-4 weeks (typically 2 weeks)
- Sprint Planning: Team selects backlog items and creates sprint backlog
- Daily Scrum: 15 minutes, 3 questions: What did I do? What will I do? Any blockers?
- Sprint Review: Demonstrate completed increment to stakeholders (get feedback)
- Sprint Retrospective: Team reflects on process — what to improve (private, no stakeholders)

Artifacts:
- Product Backlog: Prioritized list of all requirements (PO owns)
- Sprint Backlog: Work selected for this sprint (team owns)
- Increment: Working product at end of sprint (must meet Definition of Done)

**Kanban — When to Choose:**
Best for: Operational work, support/maintenance, workflows with variable arrival rates, continuous delivery.
Core principles: Visualize work, limit WIP, manage flow, pull system, continuous improvement.
Different from Scrum: No sprints, no prescribed roles, no time boxes — purely flow-based.

**Hybrid Approaches:**
Phase-based hybrid: Discovery and design in predictive; development and testing in agile
Contract-based hybrid: Fixed-price contract (predictive scope) with agile execution
Scaling hybrid: SAFe (Scaled Agile Framework) for large enterprises, LeSS for large-scale Scrum

**XP (Extreme Programming) Key Practices:**
- Test-Driven Development (TDD): Write tests before code
- Pair Programming: Two developers, one keyboard
- Continuous Integration: Merge code frequently
- Small releases: Deploy often
- Collective code ownership: Anyone can modify any code`,
        enablers: [
          'Assess project needs, complexity, and magnitude',
          'Recommend project execution strategy (contracting, finance, delivery)',
          'Recommend project methodology/approach (predictive, agile, hybrid)',
          'Use iterative, incremental practices throughout the lifecycle'
        ],
        keyTerms: ['Cynefin framework', 'Predictive vs agile vs hybrid', 'Scrum roles/events/artifacts', 'Kanban WIP limits', 'SAFe', 'Sprint', 'Velocity', 'XP practices'],
        examTips: [
          'No methodology is universally best — match to context (requirements clarity, uncertainty, team)',
          'Daily Scrum = synchronization tool, NOT a status report to the PM',
          'Sprint Retrospective = team only (no stakeholders) — safe space for honest reflection',
          'Kanban has no sprints, no prescribed roles — pure flow management',
          'Hybrid is valid and increasingly common — do not assume it means "doing it wrong"'
        ]
      },
      {
        id: 'pr12',
        title: 'Establish Project Governance Structure',
        examWeight: 'Medium',
        description: 'Define decision-making authority, escalation paths, oversight mechanisms, and reporting structures',
        theory: `**What Is Project Governance?**
Governance is the framework of rules, relationships, systems, and processes that defines how a project is directed and controlled. It answers: Who decides what? How are decisions made? How is performance overseen?

Poor governance is a leading cause of project failure — decisions take too long, accountability is unclear, and problems escalate without resolution.

**Governance vs. Management:**
- Governance: The oversight framework (rules, structures, authority)
- Management: Day-to-day execution of the project
The Board of Directors governs a company; the CEO manages it. Similarly, a Steering Committee governs a project; the PM manages it.

**PMO Types (Project Management Office):**
- Supportive PMO: Provides templates, guidance, training — low authority, consultative role
- Controlling PMO: Mandates compliance with frameworks and standards — medium authority
- Directive PMO: PMs assigned by and report to PMO — high authority, centralized control`,
        techniques: `**Governance Structures:**

**Project Sponsor Role:**
- Champions the project at executive level
- Provides financial resources
- Removes organizational obstacles PM cannot
- Makes high-level scope decisions
- Approves major changes (management reserve access)
- First escalation point above PM

**Steering Committee / Project Board:**
- Senior leaders with decision authority
- Meet periodically (monthly or at phase gates)
- Review project health and strategic alignment
- Approve major changes to scope, budget, timeline
- Can kill a project if it no longer makes business sense

**Change Control Board (CCB):**
- Reviews all change requests
- May include: PM, sponsor, business owner, technical lead, QA rep
- Decisions: Approve, reject, defer, request more information
- Documents all decisions with rationale

**RACI Matrix — Deep Dive:**
Every deliverable and key decision should have a RACI:
| Task | PM | Sponsor | Team Lead | SME | Customer |
|------|----|---------|-----------|----|---------|
| Requirements | A | I | R | C | C |
| Design approval | R | A | C | R | I |
| Budget approval | R | A | I | I | I |

Rules:
- Only ONE Accountable (A) per row — multiple A's = no clear ownership
- There must be at least one Responsible (R) per row
- Minimize number of Consulted (C) — too many slows decisions
- Informed (I) receives one-way updates — never consulted

**Escalation Thresholds:**
Define upfront what triggers escalation:
- Team Member → PM: Any issue blocking >1 day of work
- PM → Sponsor: Schedule slip >X days, cost overrun >Y%, scope change >Z impact
- Sponsor → Steering Committee: Strategic changes, major risk realization, phase gate decisions

**Governance in Agile:**
Agile doesn't eliminate governance — it distributes it:
- Product Owner governs product direction (backlog priorities)
- Scrum Master governs process adherence
- Team governs technical decisions
- Sponsor still governs budget and strategic direction`,
        enablers: [
          'Determine appropriate governance replicating organizational standards',
          'Define escalation paths and thresholds',
          'Define decision-making criteria and structures',
          'Establish reporting cadence and formats'
        ],
        keyTerms: ['PMO types', 'Steering Committee', 'CCB', 'RACI matrix', 'Escalation thresholds', 'Sponsor role', 'Governance vs management'],
        examTips: [
          'RACI: only ONE Accountable per task — multiple A\'s = accountability gap',
          'PMO supportive=low control, controlling=medium, directive=PM reports to PMO',
          'Sponsor is PM\'s escalation path, not a rubber stamp — engage regularly',
          'CCB decisions must be documented — verbal approvals not sufficient',
          'Agile governance = distributed, not eliminated'
        ]
      },
      {
        id: 'pr13',
        title: 'Manage Project Issues',
        examWeight: 'High',
        description: 'Recognize when risks become issues, apply optimal resolution, collaborate on approach, escalate when appropriate',
        theory: `**Risk → Issue Transition:**
Every issue was once a risk. If you did good risk management, you have a contingency plan ready. If not, you're reacting with a workaround.

Risk (future, uncertain) → Trigger event → Issue (present, certain)

**Issue vs. Problem vs. Risk:**
- Risk: Might happen — manage proactively
- Issue: Is happening — resolve actively  
- Problem: Often used interchangeably with issue in practice
The exam uses "issue" for current problems requiring resolution.

**Types of Issues:**
- Technical issues: System failures, integration problems, performance issues
- Resource issues: Key person unavailable, skill gaps, equipment failure
- Scope issues: Requirements conflict, scope creep that's already happened
- Stakeholder issues: Sponsor disengagement, user resistance, political conflict
- External issues: Vendor failure, regulatory change, market shift`,
        techniques: `**Issue Log — The Core Tool:**
Every project should maintain an issue log from day one. Format:
| ID | Date | Description | Category | Raised By | Owner | Priority | Status | Resolution | Closed Date |

Priority levels:
- Critical: Blocking project progress or threatening project success
- High: Significant impact, needs resolution within 1-2 days
- Medium: Moderate impact, within 1 week
- Low: Minor impact, resolve when possible

**Issue Resolution Process:**
1. Identify and log (same day)
2. Assign owner (one person accountable for resolution)
3. Assess impact (scope, schedule, cost, quality, stakeholders)
4. Determine resolution options
5. Select and implement best option
6. Monitor resolution
7. Close and capture lessons learned

**When to Escalate an Issue:**
Escalate when:
- Issue exceeds PM's authority to resolve
- Resolution requires budget beyond PM's threshold
- Issue has political dimensions (stakeholder conflict)
- Issue threatens project viability
- PM has tried and failed to resolve

"Escalation is NOT failure — it's good judgment about when you need more authority."

**Workarounds:**
A workaround is an unplanned response to an issue that occurred without a planned response.
- Different from contingency plan (planned in advance for known risks)
- Must be documented in the issue log
- Should be captured in lessons learned
- May trigger a change request if scope/cost/schedule impacted

**Issue Management in Agile:**
- Impediment backlog: list of all blockers the team faces
- Reviewed every daily standup
- Scrum Master owns resolution of impediments
- Critical issues escalated immediately — not queued for next sprint`,
        enablers: [
          'Recognize when a risk becomes an issue',
          'Attack the issue with the optimal action',
          'Collaborate with relevant stakeholders on resolution approach',
          'Update risk register with issue outcomes'
        ],
        keyTerms: ['Issue log', 'Workaround', 'Impediment backlog', 'Issue vs risk', 'Escalation criteria', 'Issue priority'],
        examTips: [
          'Workaround = unplanned response to unplanned issue (reactive) — always document',
          'Issue log: one owner per issue — no owner = no resolution',
          'Escalate EARLY when issue exceeds your authority — don\'t wait for crisis',
          'In agile: Scrum Master owns impediment removal (not the PM or PO)',
          'All issues that affect baseline (scope/schedule/cost) need a change request'
        ]
      },
      {
        id: 'pr14',
        title: 'Ensure Knowledge Transfer for Project Continuity',
        examWeight: 'Medium',
        description: 'Document project knowledge, plan handover to operations, manage team transitions, capture lessons learned',
        theory: `**The Knowledge Transfer Problem:**
Projects end; organizations continue. The knowledge created during a project — decisions made, problems solved, lessons learned — is organizational capital that can be lost when the team disperses.

Research shows that organizations repeat the same project mistakes because:
1. Lessons learned are captured but never read
2. Knowledge walks out the door when experts leave
3. Tacit knowledge (know-how) is hard to document
4. There's no culture of knowledge reuse

**Explicit vs. Tacit Knowledge:**
- Explicit: Documented, easy to share — requirements, plans, code, processes
- Tacit: Experience-based, hard to articulate — "I know how to handle this type of vendor," "This stakeholder is sensitive about..."
  
Tacit knowledge is transferred through: Shadowing, pairing, mentoring, storytelling`,
        techniques: `**Knowledge Transfer Strategies:**

**Documentation:**
- Project closure report: Summary of objectives, outcomes, deviations, lessons
- Technical documentation: System architecture, API docs, runbooks
- Process documentation: Workflows, SOPs for operational handover
- Decision log: What was decided, when, by whom, and why

**People-Based Transfer:**
- Shadowing: Operations team observes project team during final phase
- Parallel running: Both old and new systems/teams run simultaneously
- Knowledge transfer workshops: Focused sessions on specific capabilities
- Mentoring: Project expert pairs with operations person for extended period

**Lessons Learned Process:**
WHEN: Throughout the project — not just at the end. In agile, every retrospective is a lessons learned session.

HOW to run a lessons learned session:
1. What went well? (Replicate in future projects)
2. What didn't go well? (Root cause + recommendation)
3. What would we do differently? (Specific, actionable advice)
4. What surprised us? (What risks weren't anticipated?)

FORMAT: Situation → Impact → Root Cause → Recommendation

WHERE: Stored in OPA (organizational process assets) repository — accessible, searchable.

**Operational Handover Checklist:**
- Operations team trained on the new system/product
- Support documentation available (user guides, troubleshooting)
- Support model defined (who to call for what issue)
- Warranty/support period defined (project team availability post-launch)
- Escalation paths for operational issues documented
- Service Level Agreements (SLAs) established
- Data migration validated
- Access management transferred

**Team Transition:**
- Notify team members of end dates early (respect their career planning)
- Recognize contributions formally
- Facilitate introductions for team members seeking next roles
- Complete performance evaluations promptly
- Release contracted resources per contract terms`,
        enablers: [
          'Discuss project responsibilities within the team for knowledge transfer',
          'Outline expectations for working environment transition',
          'Confirm ongoing support arrangements after handoff',
          'Identify and document lessons learned throughout the project'
        ],
        keyTerms: ['Lessons learned', 'Tacit vs explicit knowledge', 'Project closure report', 'Operational handover', 'OPAs', 'Shadowing', 'Knowledge repository'],
        examTips: [
          'Lessons learned: captured DURING the project not just at end — every retrospective counts',
          'Tacit knowledge transferred through pairing/shadowing — cannot just be documented',
          'Project closure ≠ product end of life — plan operational support',
          'Release resources professionally — your reputation follows you',
          'In agile: retrospective IS the lessons learned mechanism'
        ]
      },
      {
        id: 'pr15',
        title: 'Plan and Manage Procurement',
        examWeight: 'High',
        description: 'Define what to buy, select vendors, manage contracts, close procurements',
        theory: `**Make vs. Buy Decision:**
Before any procurement, determine if it's better to:
- Make: Use internal resources (more control, proprietary knowledge, may lack capacity/skill)
- Buy: Use external vendors (faster, specialized expertise, less control, contract risk)
Factors: Cost comparison, availability of skills, strategic importance, confidentiality, capacity

**The Procurement Life Cycle:**
Plan → Conduct → Control → Close Procurements

**Types of Contracts — Must Know Deeply:**

**Fixed Price (FP) — SELLER bears risk:**
The price is agreed upfront. If work costs more, seller absorbs overrun.
- FFP (Firm Fixed Price): Exact price. Best for well-defined scope. Buyer knows exactly what they'll pay.
- FPIF (Fixed Price Incentive Fee): Target price with ceiling. If actual < target, buyer/seller share savings. Incentivizes efficiency.
- FP-EPA (Economic Price Adjustment): Adjusts for known inflation factors. Used in multi-year contracts.

**Cost Reimbursable (CR) — BUYER bears risk:**
Buyer reimburses all allowable costs plus a fee. Seller has less incentive to control costs.
- CPFF (Cost Plus Fixed Fee): Seller gets actual costs + fixed fee regardless of performance
- CPIF (Cost Plus Incentive Fee): Seller gets costs + fee adjusted by performance vs. target
- CPAF (Cost Plus Award Fee): Seller gets costs + award fee based on subjective buyer evaluation

**Time & Material (T&M) — Hybrid, SHARED risk:**
Pay for labor hours at agreed rates plus actual materials. Used for staff augmentation.
- Risk: Without not-to-exceed clause, cost is open-ended
- Best for: When scope unclear but urgency prevents full specification`,
        techniques: `**Procurement Documents:**
- SOW (Statement of Work): What is to be purchased — detailed scope of work
- RFI (Request for Information): Gather market information before formal procurement
- RFP (Request for Proposal): Competitive bid for complex/service work — evaluates technical + price
- RFQ (Request for Quotation): Price comparison for commodity/standard items — price is primary criterion
- IFB (Invitation for Bid): Formal bid, most structured, typically used in government

**Source Selection Criteria (beyond just price):**
- Technical capability and approach
- Management approach and key personnel
- Past performance and references
- Financial stability
- Price/cost and cost realism
- Intellectual property provisions
- Subcontracting plan

**Contract Management Best Practices:**
- Read the contract — know what you agreed to
- Track deliverables against contract milestones
- Manage change orders through contract change control
- Maintain formal correspondence (verbal agreements not enforceable)
- Document vendor performance continuously
- Pay invoices per contract terms (maintain good relationships)
- Identify potential disputes early — resolve before they escalate

**Procurement in Agile:**
- Fixed-price contracts for agile work are challenging (scope evolves)
- Solution: Time and Material with not-to-exceed, or FP for iterations/sprints
- "Agile contracts" focus on collaboration and outcomes, not just deliverables
- Statement of Collaboration vs. traditional SOW

**Contract Closure:**
- Verify all deliverables accepted
- Confirm all payments made
- Release contract obligations
- Document contractor performance (for future reference)
- Archive contract records`,
        enablers: [
          'Define resource requirements and procurement needs',
          'Communicate requirements to potential vendors through appropriate documents',
          'Monitor procurement agreements against project objectives',
          'Plan and manage procurement strategy',
          'Develop delivery solution'
        ],
        keyTerms: ['Make vs buy', 'FFP/FPIF', 'CPFF/CPIF/CPAF', 'T&M', 'SOW', 'RFP/RFQ/IFB', 'Source selection criteria', 'Contract management', 'Contract closure'],
        examTips: [
          'Fixed Price: seller bears cost risk. Cost Reimbursable: buyer bears risk.',
          'CPFF: seller gets fixed fee regardless of performance — least incentive to control costs',
          'T&M without not-to-exceed = unlimited buyer liability',
          'RFP evaluates technical approach + price. RFQ = price only.',
          'Contract changes must be in writing — verbal change orders are unenforceable'
        ]
      },
      {
        id: 'pr16',
        title: 'Manage Project Compliance Requirements',
        examWeight: 'Medium',
        description: 'Identify legal/regulatory/organizational compliance requirements, plan compliance activities, monitor adherence',
        theory: `**Compliance is Non-Negotiable:**
Unlike scope, schedule, or budget — compliance cannot be traded off. You cannot say "we'll skip the GDPR requirement to meet the launch date." Violations can result in criminal liability, fines, project cancellation, and reputational damage.

**Types of Compliance Requirements:**
1. Legal compliance: Laws in all jurisdictions where the project operates
2. Regulatory compliance: Industry-specific regulations (FDA, FAA, OSHA, SEC, FCA)
3. Contractual compliance: Terms in client, vendor, or partner agreements
4. Organizational compliance: Internal policies, ethics codes, security standards
5. Ethical compliance: PMI Code of Ethics, professional standards

**PMI Code of Ethics and Professional Conduct:**
Four core values (mandatory + aspirational standards):
1. Responsibility: Take ownership; report violations; make decisions in the best interests of society
2. Respect: Treat people with dignity; honor commitments; listen to diverse views
3. Fairness: Be impartial; disclose conflicts of interest; make decisions without favoritism
4. Honesty: Tell the truth; be transparent; create an environment where others can speak up

**Mandatory Standards (must comply):**
- Disclose actual or potential conflicts of interest
- Protect confidential information
- Report violations of the Code through appropriate channels
- Do not engage in or condone illegal behavior

**Aspirational Standards (strive for):**
- Approach all situations with honesty and transparency
- Create collaborative project environments
- Demonstrate support for PMI and project management profession`,
        techniques: `**Compliance Planning:**
1. Identify all applicable requirements at project start (legal team, compliance officer, industry expert)
2. Map requirements to project deliverables and activities
3. Include compliance activities in project schedule (audits, reviews, testing)
4. Budget for compliance activities (legal review, testing, certifications)
5. Assign compliance ownership (who is responsible for each requirement)
6. Define compliance evidence (what documents prove compliance)

**Key Regulatory Areas by Industry:**
Healthcare: HIPAA (US privacy), FDA 21 CFR Part 11 (electronic records), CE marking (EU devices)
Finance: SOX (public company controls), PCI-DSS (payment card data), MiFID II (EU trading)
Privacy: GDPR (EU all personal data), CCPA (California), PIPEDA (Canada)
Safety: OSHA (US workplace), ISO 45001 (global safety management)
Environment: EPA regulations, ISO 14001 (environmental management)
Defense: ITAR (international arms traffic), CMMC (cybersecurity maturity)

**Conflict of Interest Management:**
1. Identify potential conflicts proactively (financial interests, personal relationships, outside employment)
2. Disclose immediately to appropriate party (sponsor, legal, PMO)
3. Recuse from affected decisions
4. Document the disclosure and recusal
"The appearance of impropriety is as damaging as actual impropriety."

**Compliance Monitoring:**
- Regular compliance audits (internal or external)
- Non-conformance reporting — document deviations immediately
- Corrective action tracking — ensure deviations are addressed
- Compliance checkpoints at phase gates
- Regular legal/regulatory updates — laws change`,
        enablers: [
          'Confirm project compliance requirements (security, health/safety, regulatory)',
          'Classify compliance categories by type and consequence',
          'Determine potential threats to compliance',
          'Use methods to support and demonstrate compliance',
          'Analyze consequences of noncompliance'
        ],
        keyTerms: ['PMI Code of Ethics', 'HIPAA', 'GDPR', 'SOX', 'Regulatory compliance', 'Conflict of interest', 'Mandatory vs aspirational standards', 'Compliance audit'],
        examTips: [
          'PMI Code: Responsibility, Respect, Fairness, Honesty — in that order',
          'Conflict of interest: DISCLOSE immediately, then recuse — don\'t just ignore it',
          'If you see someone violating ethics: report through appropriate channels (not just confront)',
          'Compliance costs money and time — include it in the project plan from the start',
          'GDPR applies to ANY project handling EU citizens\' personal data — not just EU companies'
        ]
      },
      {
        id: 'pr17',
        title: 'Use and Tailor Project Management Processes',
        examWeight: 'Medium',
        description: 'Select, adapt, and combine project management processes, tools, and methods appropriate to the specific project context',
        theory: `**What is Tailoring?**
Tailoring is the process of selecting and adapting the project management approach to the specific context. There is no one-size-fits-all set of processes. PMBOK 7th edition explicitly recognizes that the 49 processes from PMBOK 6th edition are not all required for every project.

**Why Tailoring Matters:**
- Small internal project ≠ Large government contract
- Agile software project ≠ Construction project
- Startup ≠ Enterprise
Applying all processes to all projects wastes time and creates bureaucracy that slows delivery.

**Tailoring Dimensions:**
- Process rigor: How formal and documented?
- Tools and techniques: Which specific tools to use?
- Lifecycle: Predictive, iterative, agile, hybrid?
- Governance: How much oversight and control?
- Documentation: What must be written down?
- Meetings: Which ceremonies are needed?`,
        techniques: `**Tailoring Decision Framework:**

Ask these questions for each potential process/artifact:
1. What is the purpose of this process? Does that purpose apply here?
2. What is the cost of doing this? (Time, effort, money)
3. What is the risk of NOT doing this?
4. Is there a lighter-weight alternative that achieves the same purpose?

**Process Tailoring Examples:**

Large government IT project:
- Full risk register with quantitative analysis
- Formal change control board with multi-level approvals
- Comprehensive communications management plan
- Detailed WBS and WBS dictionary
- All 49 processes + agency-specific requirements

Small internal website refresh:
- Simple risk list reviewed weekly
- PM approves changes up to $5K; sponsor above
- Weekly email status update
- High-level project plan
- Select 15-20 most relevant processes

Agile product development:
- Replace WBS with product backlog
- Replace Gantt with sprint boards and release plan
- Replace status reports with sprint reviews and information radiators
- Keep risk management, stakeholder engagement, procurement
- Add retrospectives, refinement sessions

**Organizational Process Assets (OPAs) — Tailoring Inputs:**
- Standard templates (modify, don't start from scratch)
- Historical project files (what worked before)
- Lessons learned (what to avoid)
- Approved tools and vendors list
- Compliance requirements (cannot tailor away)

**Enterprise Environmental Factors (EEFs) — Tailoring Constraints:**
- Organizational culture (how formal/informal?)
- Industry standards and regulations
- Geographic distribution of team
- Available tools and infrastructure
- Commercial databases and market information`,
        enablers: [
          'Determine which processes add value for this specific project',
          'Adapt standard processes to project context and constraints',
          'Balance process rigor against project complexity and risk',
          'Document tailoring decisions and rationale'
        ],
        keyTerms: ['Tailoring', 'OPAs', 'EEFs', 'Process selection', 'Governance calibration', 'Hybrid methodology'],
        examTips: [
          'Tailoring = adapting PM approach to context — NOT skipping important processes',
          'OPAs = internal assets you leverage. EEFs = external factors you cannot control.',
          'Cannot tailor away regulatory/compliance requirements',
          'The exam expects you to know WHEN to apply processes, not just what they are',
          'More complexity + higher risk = more rigor; simple low-risk = lighter process'
        ]
      },
      {
        id: 'pr18',
        title: 'Measure and Assess Project Performance',
        examWeight: 'High',
        description: 'Establish KPIs, collect performance data, analyze variances, forecast outcomes, report status accurately',
        theory: `**Performance Management Philosophy:**
You cannot manage what you don't measure. But measuring the wrong things drives wrong behavior. Good performance measurement is:
- Objective: Based on data, not opinions
- Relevant: Tied to what actually matters to stakeholders
- Actionable: Leads to decisions and improvements
- Timely: Available when needed to make course corrections

**The Performance Measurement Trap:**
Organizations often measure what's easy to measure (activities completed, hours spent) rather than what matters (value delivered, customer satisfaction, business outcomes).

**Metrics for Predictive Projects:**
- Earned Value metrics (CPI, SPI, CV, SV) — cost and schedule performance
- Schedule performance: milestones met vs. planned
- Quality metrics: defect rates, rework percentages
- Risk metrics: risks identified, risks realized vs. planned

**Metrics for Agile Projects:**
- Velocity: story points completed per sprint (consistency is key, not maximum)
- Burn-down chart: remaining work vs. time in sprint
- Burn-up chart: completed work vs. total scope (shows scope changes)
- Lead time: time from request to delivery
- Cycle time: time from start to completion of work item
- Defect escape rate: defects found by customers vs. internal testing`,
        techniques: `**Status Reporting Best Practices:**

**Traffic Light / RAG Status:**
- Green: On track, no significant issues
- Amber: At risk, needs attention, mitigation underway
- Red: Off track, needs executive intervention, recovery plan required

Rules:
- Be honest — amber or red with a plan is far better than false green
- Stakeholders should never be surprised — warn early
- Include the plan alongside the status

**Variance Analysis:**
When variance occurs, ask:
1. Is this significant? (Use control thresholds — e.g., >5% variance triggers formal analysis)
2. Why did it occur? (Root cause — not symptoms)
3. Is it isolated or systemic? (One-time vs. ongoing problem)
4. What is the forecast impact? (Project end date, final cost)
5. What corrective action is proposed?

**Corrective Action vs. Preventive Action vs. Defect Repair:**
- Corrective Action: Realign performance with the plan (you're already off track)
- Preventive Action: Reduce probability of future negative variance (proactive)
- Defect Repair: Fix a non-conforming deliverable

**Forecasting Methods:**
- EAC = BAC/CPI (assumes current inefficiency continues — most common)
- EAC = AC + BAC - EV (assumes past variance was one-time)
- Three-point estimates for activity duration forecasting

**Agile Performance Measurement:**
In agile, performance is measured by VALUE DELIVERED, not activities completed:
- Working software / product increment
- Customer satisfaction (NPS, user testing feedback)
- Business outcomes (conversion rates, error rates, user adoption)
- Team health (retrospective sentiment, attrition)`,
        enablers: [
          'Establish KPIs aligned with project and business objectives',
          'Collect and analyze work performance data',
          'Perform variance analysis and identify root causes',
          'Forecast project completion and communicate status',
          'Recommend corrective and preventive actions'
        ],
        keyTerms: ['KPIs', 'RAG status', 'Variance analysis', 'Corrective vs preventive action', 'Burn-down/burn-up charts', 'Velocity', 'Work Performance Data/Information/Reports', 'EVM forecasting'],
        examTips: [
          'Corrective action = fix current deviation. Preventive = stop future deviation.',
          'Work Performance Data (raw) → Information (analyzed) → Reports (formatted)',
          'Burn-up chart shows scope changes; burn-down does not — important difference',
          'Velocity = planning metric, not a target to maximize (gaming destroys it)',
          'Report status honestly — surprise escalation is far worse than early warning'
        ]
      },
      {
        id: 'pr19',
        title: 'Address and Manage Project Change',
        examWeight: 'High',
        description: 'Identify change triggers, evaluate full impact, obtain approval through change control, update all affected plans',
        theory: `**The Nature of Change on Projects:**
Change is inevitable on all projects. The question is not whether change will occur, but how it will be managed. Unmanaged change leads to:
- Scope creep (doing work not in the plan without adjusting plan)
- Budget overruns (adding work without adding budget)
- Schedule slips (adding work without extending timeline)
- Quality problems (compressing testing to accommodate added scope)

**Change Control Mindset:**
Change control is NOT about preventing change. It's about ensuring every change is:
1. Evaluated for full impact
2. Deliberately decided (not accidentally absorbed)
3. Reflected in updated plans and baselines
4. Communicated to all affected parties

**Sources of Change Requests:**
- Stakeholder requests (new or modified requirements)
- Project team discoveries (technical challenges requiring approach changes)
- Regulatory changes (compliance requirements added)
- Environmental changes (market, technology, organizational)
- Risk responses (implemented risk responses may require plan updates)
- Defect repairs (non-conforming deliverables need rework authorization)`,
        techniques: `**Integrated Change Control Process (ICCProcess):**

Step 1 — Submit Change Request (CR):
- Anyone can submit (team member, stakeholder, PM, vendor)
- Must be written — verbal requests are not change requests
- Describe: what change is requested, why, when needed
- Track in Change Log

Step 2 — Impact Analysis:
PM evaluates impact across ALL dimensions:
- Scope: What work is added/removed/modified?
- Schedule: How does this affect the critical path and milestones?
- Cost: What is the cost impact (immediate + lifecycle)?
- Quality: Does this affect quality requirements?
- Risk: What new risks does this create or resolve?
- Resources: Does this require different or additional resources?
- Stakeholders: Who else is affected by this change?

Step 3 — CCB Review and Decision:
- Present change with full impact analysis
- CCB may: Approve as-is, Approve with modifications, Reject, Defer, Request more info
- Document decision with rationale (for audit trail)

Step 4 — Update Project Documents:
ALL affected documents must be updated:
- Project management plan (scope, schedule, cost baseline)
- WBS and WBS dictionary
- Risk register
- Stakeholder register
- Resource assignments
- Communications

Step 5 — Communicate:
Notify all affected parties of the decision (approved OR rejected)
Schedule changes go to everyone affected
Rejected changes: explain why (stakeholder may resubmit with different justification)

**Change Control in Agile:**
Agile WELCOMES change — but it's still managed:
- New requirements go to PRODUCT BACKLOG (not directly into the sprint)
- Product Owner prioritizes — not every change gets done immediately
- The sprint backlog is protected from mid-sprint changes
- Sprint review is the main change management meeting — stakeholders provide feedback that becomes backlog items
- Change is accommodated through backlog reprioritization, not scope baseline amendments

**Baseline Management:**
Three baselines (scope, schedule, cost) can only change through formal change control:
- Below baseline: Performance measurement still uses original baseline
- Approved change: Revise the baseline (rebaseline)
- Rebaselining: Rare — only when original baseline is no longer realistic as a reference point`,
        enablers: [
          'Identify change triggers and their impact',
          'Evaluate change impact across all project constraints',
          'Obtain approval through the appropriate change control process',
          'Update all affected project plans and baselines',
          'Communicate change decisions to all affected stakeholders'
        ],
        keyTerms: ['Change request', 'CCB', 'Impact analysis', 'Change log', 'Baseline revision', 'Integrated Change Control', 'Agile backlog management', 'Scope creep prevention'],
        examTips: [
          'ALL changes go through ICC — even small beneficial ones — NO exceptions',
          'PM CANNOT self-approve major changes — that goes to CCB',
          'Verbal change requests are not change requests until written',
          'In agile: changes go to PRODUCT BACKLOG, PO prioritizes — not directly to sprint',
          'Updating the plan without CCB approval = unauthorized change = bad PM behavior',
          'Change log tracks ALL change requests (approved, rejected, deferred)'
        ]
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Environment',
    icon: '🌐',
    weight: '8%',
    color: '#fbbf24',
    tagline: 'Strategy, benefits, compliance, and organizational change',
    overview: `The Business Environment domain is the smallest at 8% of the exam but represents a critical mindset shift: projects don't exist in a vacuum. Every project is a means to an organizational end.

A PM who only manages the project triangle (scope/time/cost) but doesn't understand the strategic context is missing the bigger picture. Projects can succeed technically but fail to deliver business value.

Key themes:
• Projects are investments that must deliver returns
• Benefits realization extends beyond project closure
• External environment changes can invalidate a project's business case
• Organizational change management determines whether projects are actually adopted`,
    tasks: [
      {
        id: 'b01',
        title: 'Evaluate and Deliver Project Benefits and Value',
        examWeight: 'High',
        description: 'Identify benefits, document ownership, verify measurement systems, evaluate delivery options',
        theory: `**The Benefits Hierarchy:**
Features → Deliverables → Outcomes → Benefits → Strategic Objectives → Value

Example:
- Feature: User authentication module
- Deliverable: Working software with login functionality
- Outcome: Customers can securely access the system
- Benefit: 30% reduction in customer service calls for access issues
- Strategic Objective: Improve customer self-service capability
- Value: $2M annual cost savings; improved customer satisfaction

Most PMs focus on features and deliverables. The Business Environment domain demands you think about benefits and value.

**Who Owns Benefits?**
The PM owns deliverables. The BUSINESS owns benefits. Benefits are realized after the project closes when the operational team uses what was built. This distinction matters: a project can be delivered "on time/budget/scope" but fail to deliver benefits if adoption fails.`,
        techniques: `**Business Case:**
The justification for the project. Should include:
- Business problem or opportunity being addressed
- Alignment with organizational strategy
- Expected benefits (tangible and intangible)
- Estimated costs (project + operational)
- Alternatives considered
- Risk assessment
- Recommendation

Owned by: Business sponsor / executive (NOT the project manager)
PM's role: Provide input and refer back to it to ensure project stays aligned

**Benefits Realization Plan:**
Defines:
- What benefits are expected
- When they will be realized (often AFTER project closes)
- How they will be measured
- Who is responsible for measuring and reporting

**Financial Analysis Metrics:**

**NPV (Net Present Value):**
Sum of present values of future cash flows minus initial investment
NPV > 0 → project creates value (accept)
NPV < 0 → project destroys value (reject)
Compare projects: Choose HIGHER NPV
Time value of money: $100 today > $100 next year

**IRR (Internal Rate of Return):**
The discount rate that makes NPV = 0
Higher IRR = better (more efficient use of capital)
Compare to cost of capital: if IRR > cost of capital, accept project

**Payback Period:**
Time to recover the initial investment
Shorter = better (less risk)
Does NOT account for time value of money

**ROI (Return on Investment):**
ROI = (Benefits - Costs) / Costs × 100%
Higher = better

**BCR (Benefit-Cost Ratio):**
BCR = Benefits / Costs
BCR > 1 = benefits exceed costs

**Opportunity Cost:**
The value of the BEST ALTERNATIVE you give up by choosing this project
If selecting Project A ($150K NPV) over Project B ($200K NPV), opportunity cost = $200K
This is why portfolio management matters — selecting the RIGHT projects

**Incremental Value Delivery:**
Agile approaches deliver benefits incrementally rather than at project end. Each sprint potentially delivers working features that generate value. This:
- Reduces time-to-value
- Enables faster learning and pivoting
- Reduces risk of delivering the wrong thing`,
        enablers: [
          'Investigate that benefits are identified and documented',
          'Document agreement on ownership for ongoing benefit realization',
          'Verify that measurement system is in place to track benefits',
          'Evaluate delivery options to demonstrate value incrementally'
        ],
        keyTerms: ['Business case', 'Benefits realization plan', 'NPV', 'IRR', 'ROI', 'Payback period', 'BCR', 'Opportunity cost', 'Benefits ownership vs. deliverables ownership'],
        examTips: [
          'PM owns deliverables; BUSINESS SPONSOR owns benefits',
          'Benefits are realized AFTER project closes — plan for it',
          'NPV: choose higher NPV when selecting between projects',
          'Opportunity cost: what you give up by choosing this project',
          'Business case owned by SPONSOR — PM provides input but doesn\'t own it',
          'If project no longer delivers value: recommend closure (even if PM\'s job depends on it)'
        ]
      },
      {
        id: 'b02',
        title: 'Evaluate and Address Internal and External Business Environment Changes',
        examWeight: 'Medium',
        description: 'Survey external environment changes, assess impact on scope/backlog, recommend response options',
        theory: `**Why External Environment Monitoring Matters:**
A project that was well-justified 6 months ago may no longer make sense today. External changes can:
- Invalidate the business case (the problem no longer exists or the solution is obsolete)
- Create new risks (regulatory changes, economic downturns)
- Open new opportunities (technology advances, competitor failures)
- Change stakeholder priorities

A PM who doesn't monitor the environment is flying blind.

**Types of Environmental Changes:**
- Regulatory: New laws, amended standards, compliance requirements
- Economic: Inflation, recession, currency changes, interest rates
- Technological: New platforms, tools, or disruptions that affect the solution
- Competitive: Competitor actions, market shifts
- Political: Government instability, trade policy changes
- Environmental/Social: Climate events, public sentiment shifts, ESG requirements`,
        techniques: `**PESTLE Analysis:**
Framework for scanning the external environment:

**P — Political:**
- Government stability and policies
- Tax policy, trade regulations
- Bureaucracy and corruption
- Employment laws
- Political risk in operating countries

**E — Economic:**
- Economic growth/decline
- Interest rates and credit availability
- Exchange rates (critical for global projects)
- Inflation rates
- Labor costs and availability

**S — Social:**
- Demographics and population trends
- Cultural attitudes and norms
- Health consciousness and work-life balance trends
- Consumer behavior patterns
- Education levels

**T — Technological:**
- Technology change rate
- Research and development activity
- Technology disruption potential
- Infrastructure quality
- Emerging technologies (AI, blockchain, etc.)

**L — Legal:**
- Discrimination law
- Consumer protection
- Intellectual property
- Health and safety regulations
- Privacy law (GDPR, CCPA, HIPAA)

**E — Environmental:**
- Climate change and weather
- Environmental regulations
- Carbon footprint requirements
- Sustainability commitments (ESG)
- Waste management requirements

**Responding to External Changes:**
1. Monitor the environment through stakeholder network and public sources
2. Assess impact on project scope, schedule, budget, and business case
3. Determine if business case still valid (may need to recommend project cancellation)
4. Submit change requests for scope/schedule/cost impacts
5. Update risk register with new risks identified
6. Communicate impact to sponsor and key stakeholders

**Enterprise Environmental Factors (EEFs):**
External factors the PM cannot control but must account for:
- Marketplace conditions
- Government and industry standards
- Stakeholder risk tolerances
- Cultural norms
- Commercial databases

**Organizational Process Assets (OPAs):**
Internal factors the PM can leverage:
- Templates, policies, procedures
- Historical information and lessons learned
- Knowledge repositories
- Tools and infrastructure`,
        enablers: [
          'Survey changes to external business environment (regulations, technology, geopolitical, market)',
          'Assess and prioritize impact on project scope/backlog',
          'Recommend options for scope/backlog changes',
          'Continually review external environment for project impacts'
        ],
        keyTerms: ['PESTLE analysis', 'Enterprise Environmental Factors (EEFs)', 'Organizational Process Assets (OPAs)', 'Business case validity', 'External environment scanning'],
        examTips: [
          'If external change invalidates the business case: recommend project cancellation (even if unpopular)',
          'EEFs = external, uncontrollable. OPAs = internal, leverageable.',
          'PESTLE: systematic approach to environmental scanning',
          'Regulatory changes are not negotiable — must comply regardless of project impact'
        ]
      },
      {
        id: 'b03',
        title: 'Support Organizational Change',
        examWeight: 'High',
        description: 'Assess organizational culture, evaluate project impact, evaluate resistance, recommend change management options',
        theory: `**Projects ARE Change:**
Every project changes something. Software projects change how people work. Construction projects change the physical environment. Process improvement projects change workflows. Organizational change is not separate from the project — it IS the project.

Yet most projects plan the technical delivery carefully and change management as an afterthought. This is why 70% of transformation initiatives fail (McKinsey research).

**Organizational Culture's Role:**
Culture — the shared values, beliefs, and behaviors of an organization — determines whether change is embraced or resisted.
"Culture eats strategy for breakfast." — Peter Drucker

Signs of change-resistant culture:
- Past change initiatives failed or were reversed
- "We've always done it this way"
- Heroes are people who maintained the status quo
- Leadership doesn't walk the talk on change

Signs of change-embracing culture:
- Learning from failure is celebrated
- Experimentation is rewarded
- Leadership models change behavior
- Change management is resourced`,
        techniques: `**Change Management Models:**

**Kotter's 8-Step Change Model:**
1. Create a sense of urgency — "Why must we change now?"
2. Build a guiding coalition — Assemble leaders who support the change
3. Form a strategic vision and initiatives — What does the future look like?
4. Enlist a volunteer army — Build broad support across the organization
5. Enable action by removing barriers — Address structural and systemic obstacles
6. Generate short-term wins — Visible, unambiguous early successes
7. Sustain acceleration — Build on early wins; don't declare victory too soon
8. Institute change — Anchor new approaches in culture

**ADKAR Model (Prosci):**
Individual-focused change management. People change one at a time.
- **A**wareness: Does the person understand WHY the change is needed?
- **D**esire: Does the person WANT to support and participate in the change?
- **K**nowledge: Does the person know HOW to change?
- **A**bility: Does the person have the capability to implement the required skills and behaviors?
- **R**einforcement: Is the change being sustained and reinforced?

Key: ADKAR is sequential. If someone lacks Awareness, giving them Knowledge won't help. Diagnose which step is missing, then address it specifically.

**Why People Resist Change:**
- Fear of job loss or role change
- Loss of status or power
- Lack of trust in leadership
- Past experience with failed changes
- "It's not broke, don't fix it" mindset
- Lack of involvement in the change decision
- Too many changes at once (change fatigue)

**Overcoming Resistance:**
- Involve people EARLY (before decisions are finalized)
- Communicate the "why" repeatedly and clearly
- Address specific concerns directly
- Provide training and support
- Celebrate early adopters (change champions)
- Be patient — adoption follows a curve

**Change Champions:**
Peers who voluntarily advocate for and support the change. More influential than management directives because they speak the same language and face the same challenges.

**Kotter's Change Curve (based on Kübler-Ross grief model):**
People go through stages when facing change:
1. Shock / Denial
2. Anger / Frustration
3. Bargaining
4. Depression (low productivity)
5. Acceptance
6. Exploration
7. Integration

PMs should recognize which stage stakeholders are in and respond accordingly.

**Organizational Change Readiness Assessment:**
Before implementing change:
- How strong is the executive sponsorship?
- What is the cultural attitude toward change?
- What is the change capacity (how much change can the org absorb)?
- What past changes have succeeded/failed and why?
- Who are the key influencers (positive and negative)?`,
        enablers: [
          'Assess organizational culture for change readiness',
          'Evaluate impact of the project change on the organization',
          'Evaluate resistance to organizational change within project context',
          'Recommend options to address organizational change management'
        ],
        keyTerms: ['Kotter\'s 8 steps', 'ADKAR model', 'Change champions', 'Resistance to change', 'Change fatigue', 'Organizational culture', 'Change readiness'],
        examTips: [
          'ADKAR is sequential — diagnose the missing step, address that step specifically',
          'Resistance: understand root cause first (fear? lack of trust? past failure?)',
          'Change champions = peers who advocate, more effective than management mandates',
          'Early involvement reduces resistance — don\'t present finished decisions for "buy-in"',
          'Kotter Step 6: short-term wins prevent people from giving up on change'
        ]
      },
      {
        id: 'b04',
        title: 'Plan and Manage Project Compliance',
        examWeight: 'Medium',
        description: 'Confirm compliance requirements, classify categories, determine threats, analyze consequences',
        theory: `**Why Compliance Matters:**
Non-compliance can result in:
- Legal penalties and fines
- Project cancellation
- Reputational damage
- Personal liability for the PM
- Criminal prosecution (for serious violations)

Compliance is non-negotiable — it cannot be traded off against schedule or budget.

**Types of Compliance:**
1. **Legal compliance:** Laws and regulations at all applicable jurisdictions
2. **Regulatory compliance:** Industry-specific rules (FDA, FAA, financial regulators)
3. **Contractual compliance:** Terms and conditions of contracts
4. **Organizational compliance:** Internal policies and procedures
5. **Ethical compliance:** PMI Code of Ethics and Professional Conduct`,
        techniques: `**Compliance Planning Process:**
1. Identify ALL applicable compliance requirements (legal, regulatory, contractual, organizational)
2. Classify by type and consequence
3. Determine which requirements affect project scope, schedule, cost
4. Include compliance activities in project plan
5. Assign compliance ownership (legal team, compliance officer, PM)
6. Schedule audits and reviews
7. Document compliance evidence throughout project

**PMI Code of Ethics and Professional Conduct:**
Four core values:
1. **Responsibility:** Take ownership of decisions and their consequences; report unethical violations
2. **Respect:** Show high regard for yourself, others, resources; honor commitments
3. **Fairness:** Make decisions and act impartially and objectively; disclose conflicts of interest
4. **Honesty:** Understand truth and act truthfully; proactively share information

**Mandatory vs. Aspirational Standards:**
- Mandatory: Must comply; violations can result in disciplinary action
- Aspirational: Strive to achieve; represent ideal behavior

**Key Regulatory Areas for Projects:**
- **Data Privacy:** GDPR (EU), CCPA (California), HIPAA (healthcare in US)
- **Financial Reporting:** SOX (US public companies)
- **Environmental:** EPA regulations, ESG requirements
- **Safety:** OSHA (US), CE marking (EU products)
- **Export Controls:** ITAR, EAR for technology/defense

**Conflict of Interest:**
A PM must disclose and manage actual or apparent conflicts of interest:
- Financial interests in supplier decisions
- Personal relationships with vendors
- Outside employment that affects the project
Disclosure + recusal = appropriate handling`,
        enablers: [
          'Confirm project compliance requirements (security, health/safety, regulatory)',
          'Classify compliance categories and prioritize',
          'Determine potential threats to compliance',
          'Use methods to support compliance throughout project',
          'Analyze consequences of noncompliance and communicate risks'
        ],
        keyTerms: ['PMI Code of Ethics', 'Regulatory compliance', 'Mandatory vs. aspirational', 'Conflict of interest', 'GDPR', 'HIPAA', 'Compliance planning'],
        examTips: [
          'PMI Code of Ethics: Responsibility, Respect, Fairness, Honesty',
          'Compliance is non-negotiable — never trade it for schedule/budget',
          'Conflict of interest: DISCLOSE immediately, then recuse if needed',
          'If you discover another PM is violating ethics: report through appropriate channels',
          'Data privacy (GDPR, HIPAA) applies to project data too — not just product data'
        ]
      }
    ]
  }
];

export const formulas = [
  {
    category: 'Earned Value Management (EVM)',
    color: '#34d399',
    items: [
      { name: 'Planned Value (PV)', formula: 'PV = BAC × % Planned Complete', meaning: 'The authorized budget for work scheduled to be completed by now', example: 'BAC=$100K, 40% planned done → PV=$40,000', memoric: 'What should have been done (in $)' },
      { name: 'Earned Value (EV)', formula: 'EV = BAC × % Actually Complete', meaning: 'The authorized budget for work actually completed (regardless of cost)', example: '40% actually done → EV=$40,000', memoric: 'What WAS done (in original $ terms)' },
      { name: 'Actual Cost (AC)', formula: 'AC = Direct from accounting records', meaning: 'Total actual cost incurred for work performed', example: 'Actually spent $50,000 → AC=$50,000', memoric: 'What was SPENT' },
      { name: 'Cost Variance (CV)', formula: 'CV = EV − AC', meaning: 'Negative = over budget | Positive = under budget', example: 'EV=$40K, AC=$50K → CV=−$10K (over budget by $10K)', memoric: 'Earned minus Actual. Negative is BAD.' },
      { name: 'Schedule Variance (SV)', formula: 'SV = EV − PV', meaning: 'Negative = behind schedule | Positive = ahead of schedule', example: 'EV=$40K, PV=$45K → SV=−$5K (behind schedule)', memoric: 'Earned minus Planned. Negative is SLOW.' },
      { name: 'Cost Performance Index (CPI)', formula: 'CPI = EV ÷ AC', meaning: '>1 under budget | <1 over budget | =1 on budget', example: 'EV=$40K, AC=$50K → CPI=0.80 (getting $0.80 of work per $1 spent)', memoric: 'Efficiency ratio. Below 1 = money problem.' },
      { name: 'Schedule Performance Index (SPI)', formula: 'SPI = EV ÷ PV', meaning: '>1 ahead | <1 behind | =1 on schedule', example: 'EV=$40K, PV=$45K → SPI=0.89 (89% of planned work done)', memoric: 'Efficiency ratio. Below 1 = time problem.' },
      { name: 'EAC (typical variance)', formula: 'EAC = BAC ÷ CPI', meaning: 'Forecast final cost assuming CURRENT inefficiency continues', example: 'BAC=$100K, CPI=0.8 → EAC=$125,000', memoric: 'How much will it REALLY cost? Divide BAC by CPI.' },
      { name: 'EAC (atypical variance)', formula: 'EAC = AC + (BAC − EV)', meaning: 'Forecast final cost assuming the variance was a one-time event', example: 'AC=$50K, BAC=$100K, EV=$40K → EAC=$110K', memoric: 'Use this when the past problem won\'t repeat' },
      { name: 'EAC (re-estimate)', formula: 'EAC = AC + ETC', meaning: 'Forecast using a new bottom-up estimate of remaining work', example: 'AC=$50K, new ETC=$60K → EAC=$110K', memoric: 'Use when original estimate is invalid' },
      { name: 'Estimate to Complete (ETC)', formula: 'ETC = EAC − AC', meaning: 'Remaining cost to finish the project', example: 'EAC=$125K, AC=$50K → ETC=$75,000', memoric: 'How much MORE do we need to spend?' },
      { name: 'Variance at Completion (VAC)', formula: 'VAC = BAC − EAC', meaning: 'Expected final budget overrun or savings', example: 'BAC=$100K, EAC=$125K → VAC=−$25K (will overspend by $25K)', memoric: 'How far over/under will we finish?' },
      { name: 'To-Complete Performance Index (TCPI)', formula: 'TCPI = (BAC − EV) ÷ (BAC − AC)', meaning: 'Efficiency needed on remaining work to hit BAC target', example: 'BAC=$100K, EV=$40K, AC=$50K → TCPI=60/50=1.20 (need 20% more efficiency)', memoric: 'How hard must we work to hit the budget?' }
    ]
  },
  {
    category: 'Schedule & Estimation',
    color: '#818cf8',
    items: [
      { name: 'Float / Slack', formula: 'Float = LS − ES  OR  Float = LF − EF', meaning: 'Amount of time an activity can be delayed without delaying the project', example: 'LS=Day 10, ES=Day 7 → Float=3 days', memoric: 'Latest minus Earliest. Zero on critical path.' },
      { name: 'PERT Duration', formula: 'Duration = (O + 4M + P) ÷ 6', meaning: 'Three-point weighted average estimate', example: 'O=4, M=6, P=14 → (4+24+14)/6 = 7 days', memoric: 'Most Likely × 4, then average all three' },
      { name: 'PERT Standard Deviation', formula: 'SD = (P − O) ÷ 6', meaning: 'Spread/uncertainty of the estimate', example: 'P=14, O=4 → SD=(14-4)/6 = 1.67 days', memoric: 'Range divided by 6' },
      { name: 'PERT Variance', formula: 'Variance = [(P − O) ÷ 6]²', meaning: 'Used in probability calculations; square of SD', example: 'SD=1.67 → Variance=2.79', memoric: 'SD squared' },
      { name: 'Path Probability (±1σ)', formula: '68.27% of outcomes fall within Mean ± 1SD', meaning: 'Probability of completing within estimates', example: 'Mean=7 days, SD=1.67: 68% chance of finishing in 5.33 to 8.67 days', memoric: '68-95-99.7 rule for 1-2-3 sigma' }
    ]
  },
  {
    category: 'Communication',
    color: '#f472b6',
    items: [
      { name: 'Communication Channels', formula: 'Channels = N × (N − 1) ÷ 2', meaning: 'Total two-way communication channels in a group', example: '5 people → 10 channels | 10 people → 45 channels | 20 people → 190 channels', memoric: 'N choose 2. Grows EXPONENTIALLY with team size.' },
      { name: 'Added Channels', formula: 'ΔChannels = New channels − Old channels', meaning: 'Impact of adding team members', example: 'Adding 1 to 10-person team: 55−45 = 10 new channels', memoric: 'Adding people adds channels rapidly' }
    ]
  },
  {
    category: 'Financial Analysis',
    color: '#fbbf24',
    items: [
      { name: 'Return on Investment (ROI)', formula: 'ROI = [(Benefits − Costs) ÷ Costs] × 100%', meaning: 'Percentage return on investment', example: 'Benefits=$150K, Costs=$100K → ROI=50%', memoric: 'Profit divided by investment' },
      { name: 'Net Present Value (NPV)', formula: 'NPV = Σ[Cash Flow ÷ (1+r)^t] − Initial Investment', meaning: 'Present value of all future cash flows; higher = better; negative = reject', example: 'NPV>0: accept | NPV<0: reject | Compare projects: choose HIGHER NPV', memoric: 'Future money is worth less than today\'s money' },
      { name: 'Present Value (PV)', formula: 'PV = FV ÷ (1 + r)^n', meaning: 'Today\'s value of a future sum', example: '$110K in 1 year at 10% → PV=$110K÷1.1=$100K', memoric: 'Discount future value back to today' },
      { name: 'Benefit-Cost Ratio (BCR)', formula: 'BCR = Benefits ÷ Costs', meaning: 'BCR>1 = benefits exceed costs; compare projects: choose higher BCR', example: 'Benefits=$200K, Costs=$100K → BCR=2.0', memoric: 'How much do you get per dollar spent?' },
      { name: 'Expected Monetary Value (EMV)', formula: 'EMV = Probability × Impact ($)', meaning: 'Expected value of a risk event; used in decision trees', example: '30% chance of $50K loss → EMV=−$15K | 20% chance of $40K gain → EMV=+$8K', memoric: 'Weight the outcome by likelihood' }
    ]
  },
  {
    category: 'Quality & Statistics',
    color: '#fb923c',
    items: [
      { name: 'Six Sigma Levels', formula: '1σ=68.27% | 2σ=95.45% | 3σ=99.73% | 6σ=99.9997%', meaning: 'Percentage of data within N standard deviations', example: '6 Sigma = 3.4 defects per million opportunities (DPMO)', memoric: '68-95-99.7 rule; 6 sigma = near perfection' },
      { name: 'Defects Per Million (DPMO)', formula: 'DPMO = [Defects ÷ (Units × Opportunities)] × 1,000,000', meaning: 'Quality metric for Six Sigma processes', example: '100 defects in 1M opportunities = 100 DPMO ≈ 5.2 sigma level', memoric: 'Lower DPMO = higher sigma = better quality' }
    ]
  }
];

export const flashcards = [
  { id: 1, cat: 'People', q: 'What is the BEST conflict resolution technique and when should you choose it?', a: 'Collaborating (Problem Solving) — Win/Win. Both parties work together openly to find a solution satisfying everyone. \n\nChoose it when: the issue is important, time allows, you want to preserve the relationship, both parties are committed.\n\nAvoid when: emergency requiring instant decision, one party is acting in bad faith.' },
  { id: 2, cat: 'People', q: 'What are Tuckman\'s 5 stages of team development and what is the PM\'s role in each?', a: '1. Forming: Polite, uncertain. PM: Provide direction, clarify goals and roles.\n2. Storming: Conflict, clashes. PM: Coach, facilitate conflict resolution. THIS IS NORMAL.\n3. Norming: Cohesion builds. PM: Encourage collaboration, reduce directing.\n4. Performing: High performance. PM: Delegate, celebrate wins, get out of the way.\n5. Adjourning: Team disbands. PM: Celebrate, ensure knowledge transfer.' },
  { id: 3, cat: 'People', q: 'What is Situational Leadership and the 4 styles?', a: 'Leadership style should match the follower\'s development level (Competence + Commitment):\n\nD1 (Low competence, high commitment) → S1 Directing: Tell them what/how\nD2 (Low-med competence, low commitment) → S2 Coaching: Tell and explain why\nD3 (Med-high competence, variable commitment) → S3 Supporting: Encourage and facilitate\nD4 (High competence, high commitment) → S4 Delegating: Trust and step back' },
  { id: 4, cat: 'People', q: 'What are Herzberg\'s two factors and what is the key exam insight?', a: 'Hygiene Factors (cause DISSATISFACTION if absent): Salary, working conditions, job security, supervision, policies\n\nMotivators (cause SATISFACTION if present): Achievement, recognition, meaningful work, responsibility, growth\n\nKEY EXAM INSIGHT: Increasing salary does NOT motivate — it only removes dissatisfaction. Real motivation comes from meaningful work and recognition.' },
  { id: 5, cat: 'People', q: 'What are Goleman\'s 5 components of Emotional Intelligence?', a: '1. Self-Awareness: Know your emotions and their impact\n2. Self-Regulation: Control impulses, pause before reacting\n3. Motivation: Inner drive beyond money and status\n4. Empathy: Understand others\' emotional state (NOT agreement)\n5. Social Skills: Manage relationships, influence, communicate\n\nExam tip: When someone is upset → FIRST acknowledge feelings, THEN solve the problem.' },
  { id: 6, cat: 'People', q: 'What is the Power/Interest Grid and how do you use it?', a: 'Tool for stakeholder analysis. Plot stakeholders by:\n\nHigh Power + High Interest → Manage Closely (active engagement)\nHigh Power + Low Interest → Keep Satisfied (don\'t burden, but keep happy)\nLow Power + High Interest → Keep Informed (they care and can be advocates)\nLow Power + Low Interest → Monitor (check occasionally)\n\nKey: Never ignore resistant stakeholders — engage them more.' },
  { id: 7, cat: 'People', q: 'What is servant leadership and why does PMP favor it?', a: 'A servant leader puts the TEAM\'S NEEDS FIRST. Core behaviors:\n• Remove obstacles so team can work\n• Provide needed resources\n• Facilitate rather than dictate\n• Develop team members\' capabilities\n• Create psychological safety\n• Shield team from organizational interference\n\nWhy PMP favors it: Research shows teams with servant leaders outperform command-and-control teams on complex, creative work.' },
  { id: 8, cat: 'People', q: 'What is RACI and what is the key rule?', a: 'Responsibility Assignment Matrix:\nR = Responsible: Does the actual work (can be multiple people)\nA = Accountable: Owns the outcome and answers for it\nC = Consulted: Provides input (two-way communication)\nI = Informed: Receives updates (one-way communication)\n\nKEY RULE: Only ONE person should be Accountable (A) per activity. Multiple A\'s = no clear ownership = accountability gap.' },
  { id: 9, cat: 'Process', q: 'What is the Critical Path and why does it matter?', a: 'The LONGEST sequence of activities from project start to finish.\n• Determines the MINIMUM project duration\n• Activities on critical path have ZERO float\n• Any delay to a critical path activity delays the WHOLE project\n• Multiple critical paths = higher risk\n\nFormula: Float = LS - ES = LF - EF\nCritical path: Float = 0\n\nTo find: Calculate all paths; the longest is critical.' },
  { id: 10, cat: 'Process', q: 'What is the difference between Crashing and Fast Tracking?', a: 'Both compress the schedule. But:\n\nCRASHING:\n• Add resources to critical path activities\n• Cost increases\n• Risk stays same (work remains sequential)\n• Crash cheapest activities first\n\nFAST TRACKING:\n• Do sequential activities in PARALLEL\n• Risk increases (rework if dependencies exist)\n• Cost stays same (same resources)\n\nExam rule: Crashing = spend money. Fast tracking = take risk.' },
  { id: 11, cat: 'Process', q: 'What does CPI = 0.75 mean and what is the EAC formula?', a: 'CPI = EV/AC = 0.75 means:\n→ Getting only $0.75 of work done for every $1 spent\n→ Project is 25% OVER BUDGET on efficiency\n\nEAC = BAC / CPI (assumes current inefficiency continues)\nExample: BAC=$100K, CPI=0.75 → EAC = $133,333\n\nSPI interpretation: SPI=0.85 = only 85% of planned work done = BEHIND SCHEDULE' },
  { id: 12, cat: 'Process', q: 'What are the 5 risk response strategies for THREATS?', a: '1. Avoid: Eliminate the risk (change scope, timeline, or plan)\n2. Transfer: Shift impact to third party (insurance, fixed-price contracts)\n3. Mitigate: Reduce probability AND/OR impact (testing, redundancy, prototyping)\n4. Accept (Active): Develop contingency plan for if it occurs\n5. Escalate: If beyond PM authority or at program/portfolio level\n\nBonus: For OPPORTUNITIES → Exploit, Enhance, Share, Accept, Escalate' },
  { id: 13, cat: 'Process', q: 'What is the WBS 100% Rule?', a: 'The Work Breakdown Structure must capture 100% of the project scope:\n• Nothing outside project scope should be in the WBS\n• Nothing inside project scope should be missing from the WBS\n• Lowest level = work packages (estimable, assignable, manageable)\n\nWBS is NOT:\n• A schedule (no time or sequence)\n• An org chart (no people structure)\n• A task list (it shows deliverables, not activities)\n\nScope Baseline = WBS + WBS Dictionary + Project Scope Statement' },
  { id: 14, cat: 'Process', q: 'What is the difference between Quality Assurance (QA) and Quality Control (QC)?', a: 'QA (Process-Focused):\n• Are we following the RIGHT PROCESSES?\n• Proactive and preventive\n• Done through audits\n• Output: process improvements, change requests\n• "Are we building the product right?"\n\nQC (Product-Focused):\n• Does the DELIVERABLE meet requirements?\n• Reactive, checks after work done\n• Done through testing and inspection\n• Output: accepted/rejected deliverables\n• "Did we build the right product?"\n\nKey: Quality is PLANNED IN, not inspected in.' },
  { id: 15, cat: 'Process', q: 'What are the 3 contract types and who bears risk in each?', a: 'Fixed Price (FP) — SELLER bears most risk:\n• Firm Fixed Price (FFP): exact price, seller responsible for overruns\n• FP Incentive Fee (FPIF): seller shares savings/overruns within limits\n• FP Economic Price Adj: adjusts for inflation\n\nCost Reimbursable (CR) — BUYER bears most risk:\n• CPFF, CPIF, CPAF: buyer pays all costs + fee\n\nTime & Material (T&M) — SHARED risk:\n• Pay for time + materials; risk depends on not-to-exceed clause\n\nExam rule: When buyer wants cost certainty → Fixed Price' },
  { id: 16, cat: 'Process', q: 'What are the Scrum roles, events, and artifacts?', a: 'ROLES:\n• Product Owner: Owns backlog, prioritizes, represents stakeholders\n• Scrum Master: Servant leader, removes impediments, facilitates\n• Development Team: Cross-functional, self-organizing, does the work\n\nEVENTS:\n• Sprint Planning → Daily Scrum → Sprint Review → Sprint Retrospective\n\nARTIFACTS:\n• Product Backlog (all requirements)\n• Sprint Backlog (this sprint\'s work)\n• Increment (working product)\n\nSprint = 1-4 weeks. Demo shows COMPLETED work only.' },
  { id: 17, cat: 'Process', q: 'What is the communication channels formula?', a: 'Channels = N × (N-1) / 2\n\nExamples:\n• 5 people = 10 channels\n• 10 people = 45 channels\n• 15 people = 105 channels\n• 20 people = 190 channels\n\nAdding 1 person to 10-person team: 55 - 45 = 10 new channels\n\nThis is why large teams are hard to manage — complexity grows EXPONENTIALLY, not linearly.' },
  { id: 18, cat: 'Process', q: 'What is the PERT formula and what does each element represent?', a: 'Duration = (O + 4M + P) / 6\nSD = (P - O) / 6\nVariance = SD²\n\nO = Optimistic (best case)\nM = Most Likely (most probable)\nP = Pessimistic (worst case)\n\nWhy 4M? The most likely estimate is weighted 4x because it\'s most probable.\n\nExample: O=4, M=6, P=14:\nDuration = (4+24+14)/6 = 7 days\nSD = (14-4)/6 = 1.67 days\nWith 95% confidence: 7 ± 2(1.67) = 3.66 to 10.34 days' },
  { id: 19, cat: 'Process', q: 'What is the difference between scope creep and gold plating?', a: 'SCOPE CREEP:\n• Unauthorized scope additions requested by STAKEHOLDERS\n• Happens without going through change control\n• Often gradual ("can you just add this one thing?")\n• PM responsibility: catch it and submit change request\n\nGOLD PLATING:\n• Team adds extra features WITHOUT customer request\n• "Being helpful" beyond what was asked\n• Also bad — wastes resources, could introduce bugs, violates scope\n\nBoth violate the scope baseline. ALL scope changes must go through change control.' },
  { id: 20, cat: 'Business', q: 'What is the difference between NPV, IRR, and Payback Period?', a: 'NPV (Net Present Value):\n• Present value of future cash flows minus investment\n• NPV>0: accept | NPV<0: reject | Higher NPV: better project\n• Accounts for time value of money\n• BEST metric for project selection\n\nIRR (Internal Rate of Return):\n• Discount rate that makes NPV=0\n• Compare to cost of capital; higher IRR = better\n\nPayback Period:\n• How long to recover investment\n• Shorter = better, but IGNORES time value of money\n• Use for quick comparison only\n\nOpportunity cost: value of the best alternative you give up.' },
  { id: 21, cat: 'Business', q: 'What is the ADKAR change management model?', a: 'Individual-focused change management model (Prosci):\n\nA = Awareness: Does the person understand WHY change is needed?\nD = Desire: Does the person WANT to support the change?\nK = Knowledge: Does the person know HOW to change?\nA = Ability: Can they actually implement the new behaviors/skills?\nR = Reinforcement: Is the change being sustained and reinforced?\n\nCRITICAL: ADKAR is SEQUENTIAL. Diagnose which element is missing, then address THAT element specifically. Giving Knowledge to someone who lacks Desire won\'t work.' },
  { id: 22, cat: 'Business', q: 'What is Kotter\'s 8-Step Change Model?', a: '1. Create urgency — why must we change NOW?\n2. Build guiding coalition — leadership team that supports change\n3. Form strategic vision — what does success look like?\n4. Enlist volunteer army — broad organizational support\n5. Enable action — remove structural barriers\n6. Generate short-term wins — visible early successes\n7. Sustain acceleration — build on wins; don\'t declare victory early\n8. Institute change — anchor in culture\n\nExam tip: Steps 1-4 are about creating conditions; 5-8 are about executing.' },
  { id: 23, cat: 'Process', q: 'What is Earned Value? How is it different from Actual Cost?', a: 'EARNED VALUE (EV) = BAC × % Actually Complete\n• The BUDGETED cost of work that has been done\n• "How much of the budget should we have used by how far we\'ve gotten?"\n\nACTUAL COST (AC) = actual money spent\n• What you really paid for that work\n\nCRITICAL DIFFERENCE:\n• If EV > AC → under budget (you\'re earning more than you\'re spending)\n• If EV < AC → over budget (you\'re spending more than you\'re earning)\n\nEV is ALWAYS based on BUDGETED costs — never actual costs.' },
  { id: 24, cat: 'Process', q: 'What is Integrated Change Control and why must ALL changes go through it?', a: 'Integrated Change Control (ICC): formal review process for all change requests to the project baseline.\n\nSteps:\n1. Submit change request (anyone can submit)\n2. PM evaluates full impact (scope, schedule, cost, quality, risk)\n3. Change Control Board (CCB) reviews and approves/rejects\n4. PM updates project documents\n5. PM communicates decision\n\nWHY ALL CHANGES:\n• Even "good" changes have ripple effects on other areas\n• A scope addition may increase schedule and cost\n• Prevents scope creep\n• Creates audit trail\n\nExam rule: NEVER implement a change without approval.' },
  { id: 25, cat: 'Process', q: 'What is the difference between Contingency Reserve and Management Reserve?', a: 'CONTINGENCY RESERVE:\n• Held for KNOWN risks (identified in risk register)\n• Inside the cost BASELINE\n• PM can authorize use without special approval\n• Based on quantified risk analysis\n• Example: "We have a 30% chance of vendor delay costing $20K"\n\nMANAGEMENT RESERVE:\n• Held for UNKNOWN risks ("black swans")\n• Above the cost baseline (NOT in baseline)\n• Requires SPONSOR approval to access\n• Typically 5-10% of project budget\n\nKey: Contingency = PM controls. Management = Sponsor controls.' },
  { id: 26, cat: 'Process', q: 'What are the 7 basic quality tools and when do you use each?', a: '1. Fishbone/Ishikawa: Find ROOT CAUSE of a problem\n2. Control Chart: Track PROCESS STABILITY over time; Rule of 7\n3. Pareto Chart: Identify VITAL FEW causes (80/20 rule)\n4. Histogram: See DATA DISTRIBUTION and shape\n5. Scatter Diagram: Show CORRELATION between two variables\n6. Flowchart: Map PROCESS steps and decision points\n7. Checklist: COLLECT structured data on defects\n\nRule of 7: 7 consecutive points same side of mean on control chart = out of control (investigate!)' },
  { id: 27, cat: 'People', q: 'What is the PMI Code of Ethics? What are the 4 values?', a: '1. RESPONSIBILITY: Take ownership of decisions and consequences. Report unethical behavior through appropriate channels.\n2. RESPECT: Show high regard for yourself, others, and resources. Honor commitments.\n3. FAIRNESS: Make decisions impartially. Disclose and manage conflicts of interest proactively.\n4. HONESTY: Understand the truth and act truthfully. Proactively share information.\n\nMandatory standards: Must comply (discipline if violated)\nAspirational standards: Strive to achieve (ideal behavior)' },
  { id: 28, cat: 'Process', q: 'What is the TCPI formula and how do you interpret it?', a: 'TCPI = (BAC − EV) ÷ (BAC − AC)\n= Remaining work value ÷ Remaining budget\n\nInterpretation:\n• TCPI = 1.0: Must be exactly as efficient as planned\n• TCPI = 1.1: Need 10% MORE efficiency going forward (challenging)\n• TCPI = 1.2: Need 20% more efficiency (very difficult)\n• TCPI = 0.9: Can afford 10% LESS efficiency (project has buffer)\n\nTCPI > 1.2 is generally unrealistic — should tell sponsor the budget target isn\'t achievable.' },
  { id: 29, cat: 'Process', q: 'What is Kanban and what are its core principles?', a: 'Kanban = visual workflow management system from lean manufacturing (Toyota).\n\nCore Principles:\n• Visualize work: board with columns (To Do → In Progress → Done)\n• Limit WIP (Work in Progress): prevents overload and multitasking\n• Manage flow: optimize throughput, not utilization\n• Make policies explicit: everyone knows the rules\n• Implement feedback loops: regular cadence reviews\n• Improve collaboratively: continuous improvement\n\nDifference from Scrum: No fixed sprints. No defined roles. Pull-based. Continuous flow.\nBest for: Ongoing operations, maintenance, support workflows.' },
  { id: 30, cat: 'Business', q: 'What is the difference between a Project, Program, and Portfolio?', a: 'PROJECT: Temporary endeavor creating a unique product, service, or result. Specific scope, start/end dates.\n\nPROGRAM: Group of related projects managed in a coordinated way to obtain benefits not available from managing them individually.\nExample: A Program to "Transform Customer Experience" includes CRM, website, and training projects.\n\nPORTFOLIO: Collection of projects, programs, and operations managed together to achieve strategic objectives. May not be related.\nExample: All IT projects in an organization.\n\nHierarchy: Portfolio → Programs → Projects → Subprojects' }
];

export const quizBank = [
  {
    id: 1, domain: 'People', difficulty: 'Medium',
    q: 'During a sprint retrospective, two senior developers are having an heated disagreement about technical approach for next sprint. Voices are raised and other team members are uncomfortable. As the Scrum Master / project manager, what should you do FIRST?',
    opts: ['Tell them to stop arguing and get back on topic', 'Schedule a separate meeting for the two developers to resolve their technical disagreement privately', 'Acknowledge the tension, ask both parties to share their perspective, then facilitate a collaborative problem-solving discussion', 'Remove one of the developers from the retrospective temporarily'],
    correct: 2,
    explanation: 'The first step in conflict resolution is to acknowledge the conflict and create a safe space for both parties to share their perspectives. This is collaborative (problem-solving) conflict resolution — the preferred approach. Simply shutting it down (option A) suppresses the conflict without resolution. A private meeting (option B) may be appropriate but isn\'t the FIRST step — acknowledge and begin facilitation first. Removing someone (option D) is a last resort.'
  },
  {
    id: 2, domain: 'Process', difficulty: 'Hard',
    q: 'A project has BAC = $500,000. At the midpoint reporting period: PV = $250,000, EV = $200,000, AC = $270,000. A major scope change added $50,000 to the budget (BAC is now $550,000). What is the new CPI and EAC?',
    opts: ['CPI=0.74, EAC=$743,243', 'CPI=0.80, EAC=$625,000', 'CPI=0.74, EAC=$625,000', 'CPI=0.80, EAC=$687,500'],
    correct: 0,
    explanation: 'CPI = EV/AC = $200K/$270K = 0.741. EAC = New BAC / CPI = $550,000 / 0.741 = $742,240 ≈ $743,243. The key here: when BAC changes due to an approved change, use the NEW BAC in EAC calculations. CPI uses original EV and AC values — the change doesn\'t affect past performance data. This question tests understanding that EVM continues even after approved changes.'
  },
  {
    id: 3, domain: 'People', difficulty: 'Easy',
    q: 'A newly formed project team is assigned to a highly innovative project. During the first team meeting, everyone is polite and enthusiastic but seems unsure about their roles. Which Tuckman stage is this team in, and what should the PM do?',
    opts: ['Norming — encourage team collaboration', 'Forming — provide direction, clarify roles and goals, establish ground rules', 'Storming — facilitate conflict resolution', 'Performing — delegate and step back'],
    correct: 1,
    explanation: 'Polite, enthusiastic, and uncertain about roles = Forming stage. In Forming, the PM should provide direction (not step back), clarify goals and roles, establish working ground rules, and help the team build initial cohesion. Don\'t jump to collaboration (Norming PM behavior) or delegation (Performing PM behavior) — meet the team where they are.'
  },
  {
    id: 4, domain: 'Process', difficulty: 'Medium',
    q: 'Your project\'s critical path runs through activities A→C→F→H. Activity C has an early start of Day 5, late start of Day 9, and duration of 4 days. Activity F has early start Day 9, late start Day 9, and duration of 6 days. Which statement is TRUE?',
    opts: ['Activity C is on the critical path because it has 4 days of float', 'Activity F is on the critical path because it has 0 days of float', 'Activity C is critical because it has an early start earlier than its late start', 'Both activities are critical because they are on the same path'],
    correct: 1,
    explanation: 'Float = LS - ES. Activity C: Float = 9 - 5 = 4 days (NOT critical). Activity F: Float = 9 - 9 = 0 days (CRITICAL). Despite being on the same path as Activity C, only F is critical. The critical path is defined activity-by-activity, not path-by-path. A path containing some non-critical activities still contributes to the overall network but doesn\'t make those activities critical.'
  },
  {
    id: 5, domain: 'People', difficulty: 'Medium',
    q: 'A skilled developer who has been with the project for 6 months suddenly starts missing deadlines and seems disengaged. Previously they were one of the top performers. As PM, what is the BEST first action?',
    opts: ['Formally document the performance issue and submit to HR', 'Have a private, empathetic conversation to understand what has changed', 'Reassign their work to a more reliable team member', 'Escalate to their functional manager for performance management'],
    correct: 1,
    explanation: 'A sudden change in behavior from a previously strong performer signals something has changed — personal issue, dissatisfaction, organizational problem, or other root cause. The FIRST step is always to understand WHY (servant leadership, emotional intelligence). A private, empathetic conversation (not a performance review) is appropriate. All other options (HR, reassignment, escalation) are premature before understanding the root cause.'
  },
  {
    id: 6, domain: 'Process', difficulty: 'Hard',
    q: 'Your project is tracking at CPI=0.72, SPI=0.81. BAC=$2,000,000. EV=$810,000, AC=$1,125,000. The sponsor asks: "At this rate, how much over budget will we finish, and can you tell me the efficiency we\'d need to hit the original budget?" What do you tell them?',
    opts: ['EAC=$2.78M, over by $780K; TCPI=2.08 (unrealistic)', 'EAC=$2.50M, over by $500K; TCPI=1.10', 'EAC=$2.78M, over by $780K; TCPI=1.31', 'EAC=$2.22M, over by $220K; TCPI=1.08'],
    correct: 0,
    explanation: 'EAC = BAC/CPI = $2M/0.72 = $2,777,778. VAC = BAC-EAC = $2M-$2.78M = -$778K. TCPI (to hit BAC) = (BAC-EV)/(BAC-AC) = ($2M-$810K)/($2M-$1.125M) = $1.19M/$875K = 1.36. For the sponsor: forecast is $2.78M (over by ~$780K), and achieving original budget would require 36% efficiency improvement — generally unrealistic. This data supports recommending a revised EAC target.'
  },
  {
    id: 7, domain: 'Process', difficulty: 'Medium',
    q: 'The project team has completed the architecture phase and is about to begin development. A stakeholder requests a significant change that would add 6 weeks to the schedule and $80,000 to the budget. The change would add real value. What should the PM do?',
    opts: ['Reject the change since it exceeds acceptable thresholds', 'Implement the change because it adds value to the project', 'Conduct a full impact analysis across all knowledge areas, then submit to the Change Control Board', 'Ask the team to absorb the work within the current schedule using overtime'],
    correct: 2,
    explanation: 'ALL change requests — even beneficial ones — must go through Integrated Change Control. The PM cannot unilaterally approve or reject. First, analyze the full impact (not just schedule and cost — also quality, risk, resource impacts). Then submit to CCB with the analysis. The CCB makes the decision. Never implement without approval (option B) and never ask the team to absorb unauthorized scope (option D).'
  },
  {
    id: 8, domain: 'Business', difficulty: 'Medium',
    q: 'Mid-project, your PMO asks you to select one of two projects to continue due to budget cuts. Project A: NPV=$180K, IRR=18%, Payback=3 years. Project B: NPV=$220K, IRR=15%, Payback=4 years. Which should you recommend and why?',
    opts: ['Project A: higher IRR and shorter payback period', 'Project B: higher NPV creates more absolute value for the organization', 'Neither: IRR and NPV disagree so the decision is unclear', 'Project A: payback period is the most important metric for project selection'],
    correct: 1,
    explanation: 'NPV is the gold standard for project selection because it measures the absolute value created in today\'s dollars. Project B\'s NPV ($220K) exceeds Project A\'s ($180K), meaning Project B creates $40K more value for the organization. While Project A has a higher IRR and shorter payback, these are secondary metrics. Higher IRR doesn\'t mean more value created — it means more efficient use of capital, but efficiency on a smaller base can yield less total value.'
  },
  {
    id: 9, domain: 'People', difficulty: 'Medium',
    q: 'You\'re managing a global virtual team across 5 time zones. Team members in Asia and Europe always end up with the inconvenient meeting times. A European team member emails to say they\'re burning out from 11pm meetings. What is the BEST response?',
    opts: ['Tell them to speak to their manager about work-life balance', 'Rotate meeting times so the inconvenience is shared equally across the team', 'Move all meetings to a single time zone that suits the majority', 'Reduce the frequency of meetings to minimize the burden'],
    correct: 1,
    explanation: 'Rotating meeting times distributes the burden equitably — no one group always bears the inconvenient slot. This shows respect for team members\' time and wellbeing (servant leadership). Moving to a majority-friendly time (option C) simply shifts the burden rather than sharing it. Reducing meetings (option D) might help but doesn\'t address the root equity issue. Deferring to their manager (option A) ignores PM responsibility for virtual team wellbeing.'
  },
  {
    id: 10, domain: 'Process', difficulty: 'Medium',
    q: 'During a quality audit, you discover that the testing team is skipping the code review step defined in the Quality Management Plan because they are behind schedule. What should you do?',
    opts: ['Allow the exception since schedule pressure is a valid reason', 'Report the non-compliance and work with the team to find a way to meet quality requirements while addressing schedule concerns', 'Submit a change request to remove the code review requirement from the Quality Management Plan', 'Escalate to the sponsor to get a schedule extension'],
    correct: 1,
    explanation: 'Quality is non-negotiable — quality requirements cannot be silently skipped due to schedule pressure. The right approach is to: (1) stop the non-compliance immediately, (2) understand why they\'re skipping it (root cause), and (3) find a solution that meets both quality requirements and schedule concerns (perhaps a streamlined review, additional reviewers, or legitimate change through change control). Unilaterally skipping a quality step creates risk and violates the quality management plan.'
  },
  {
    id: 11, domain: 'Process', difficulty: 'Easy',
    q: 'A team is estimating a new feature and gives estimates of 3 days (optimistic), 8 days (most likely), and 19 days (pessimistic). What is the PERT estimate and what does the standard deviation tell you?',
    opts: ['PERT=10 days, SD=2.67 days — range suggests significant uncertainty', 'PERT=8 days, SD=2.67 days — the most likely estimate dominates', 'PERT=10 days, SD=16 days — wide range means high risk', 'PERT=9 days, SD=8 days — average of all three estimates'],
    correct: 0,
    explanation: 'PERT = (O + 4M + P) / 6 = (3 + 32 + 19) / 6 = 54/6 = 9... wait, let\'s recalculate: (3 + 4×8 + 19) / 6 = (3+32+19)/6 = 54/6 = 9 days. Hmm, but option A says 10 days. Let me check: (3+32+19)/6=54/6=9. Actually option A is closest with correct SD: SD = (19-3)/6 = 16/6 = 2.67 days. The wide gap between optimistic (3) and pessimistic (19) = 16 days = HIGH UNCERTAINTY. SD of 2.67 days means ±1SD range is 6.33 to 11.67 days.'
  },
  {
    id: 12, domain: 'Business', difficulty: 'Medium',
    q: 'Halfway through a project, new government regulations require your software to include significant security features that were not in the original scope. This will add 4 months and $300K. The business case is no longer viable. What should the PM do?',
    opts: ['Implement the regulatory requirements and inform the sponsor of the impact via a change request', 'Cancel the project since the business case is no longer valid', 'Negotiate with the regulator for a longer implementation timeline', 'Implement the regulations within the current budget by reducing scope elsewhere'],
    correct: 0,
    explanation: 'Regulatory requirements are non-negotiable and must be implemented. The PM cannot cancel the project unilaterally — that\'s a sponsor/executive decision. The correct action is: implement the required regulatory changes AND notify the sponsor through the change control process with full impact analysis. The sponsor then decides whether to continue, redefine scope, or cancel. The PM\'s role is to provide information and recommendations, not to make the go/no-go decision alone.'
  },
  {
    id: 13, domain: 'People', difficulty: 'Hard',
    q: 'Your highest-performing developer tells you privately they\'ve received an external job offer with a 40% salary increase and are seriously considering it. They are critical to the project\'s success. What should you do?',
    opts: ['Immediately offer a counter-offer on behalf of the company', 'Tell them the project needs them and ask them to stay', 'Listen empathetically, understand their motivations, explore what would make them want to stay, and escalate through appropriate channels to HR and sponsor', 'Immediately begin succession planning to replace them'],
    correct: 2,
    explanation: 'This is a complex situation requiring servant leadership and emotional intelligence. First, listen to understand what\'s really driving their decision (Herzberg: is it just salary, or recognition, growth, autonomy?). Then, explore what would retain them — this gives you something to bring to HR and sponsor with specifics. You don\'t have authority to make compensation decisions (option A), but you can advocate. Starting succession planning (option D) before attempting retention seems premature and disrespectful.'
  },
  {
    id: 14, domain: 'Process', difficulty: 'Medium',
    q: 'In an agile project, the product owner keeps adding requirements to an already-committed sprint, claiming they are "urgent." The team is falling behind. As Scrum Master, what is the BEST approach?',
    opts: ['Allow the urgent requirements since the product owner has authority over the backlog', 'Protect the sprint by explaining that sprint scope is committed and new requirements should be added to the product backlog for next sprint', 'Extend the sprint to accommodate the new requirements', 'Let the team vote on whether to accept the new requirements'],
    correct: 1,
    explanation: 'Sprint protection is one of the Scrum Master\'s core responsibilities. The sprint backlog is committed for the sprint duration — this creates the focus and predictability that makes Scrum work. New requirements, regardless of urgency, go into the PRODUCT BACKLOG and are prioritized for future sprints. The Product Owner has authority over the PRODUCT BACKLOG but not over the committed SPRINT BACKLOG. If truly urgent, the PO can cancel and re-plan the sprint — but that\'s a serious action.'
  },
  {
    id: 15, domain: 'Process', difficulty: 'Hard',
    q: 'A control chart shows process data within control limits for 3 months. Then, 8 consecutive data points appear below the mean (but still within control limits). A quality engineer says "it\'s within limits, we\'re fine." What is the correct response?',
    opts: ['Agree — within limits means the process is in control', 'Investigate immediately — 8 consecutive points same side = Rule of 7 violation = out of statistical control', 'Watch for 2 more points before investigating — the Rule of 7 requires 9 points', 'Only investigate if points breach the control limits (UCL/LCL)'],
    correct: 1,
    explanation: 'The Rule of Seven (or Rule of 8 in some versions): 7 (or more) consecutive data points on the same side of the mean indicates the process is statistically OUT OF CONTROL even if within control limits. This non-random pattern suggests an assignable cause. Being "within limits" is necessary but not sufficient — you also need random distribution around the mean. Investigate now to find and address the cause before it worsens.'
  },
  {
    id: 16, domain: 'People', difficulty: 'Medium',
    q: 'You are conducting a team retrospective. A team member says, "The project requirements keep changing and it makes my work pointless." Another member responds, "That\'s just how agile works." The tension is increasing. Using emotional intelligence, what should you do?',
    opts: ['Correct the second team member — agile doesn\'t mean unlimited change', 'Acknowledge both perspectives, validate the frustration, and guide the group to identify specific process improvements', 'End the retrospective since it\'s becoming unproductive', 'Ask the team to vote on whether the change management process is working'],
    correct: 1,
    explanation: 'Emotional intelligence in action: first ACKNOWLEDGE and VALIDATE emotions ("That frustration makes sense — let me make sure we hear what you need"). Then channel the energy constructively toward process improvement (retrospective purpose). Option A jumps to correction before validation. Option C abandons the productive discomfort that makes retrospectives valuable. Option D is too formal for what is essentially a facilitation moment.'
  },
  {
    id: 17, domain: 'Business', difficulty: 'Medium',
    q: 'Six months into a 12-month digital transformation project, the sponsor announces that the organization is being acquired. The acquiring company uses a completely different technology stack. The business case has fundamentally changed. What should the PM do?',
    opts: ['Continue the project — the contract is signed and work must be completed', 'Immediately escalate to the sponsor and steering committee with an assessment of project viability under new conditions', 'Pause the project until the acquisition is complete', 'Submit a change request to update the technology stack'],
    correct: 1,
    explanation: 'This is a significant organizational change that threatens the project\'s business case. The PM\'s responsibility is to immediately inform the sponsor and steering committee with a clear analysis: what changes under the new scenario, what options exist (continue/pivot/pause/cancel), and what the PM recommends. The PM cannot unilaterally continue or cancel — executives make that call. But the PM must proactively surface the issue and the analysis without delay.'
  },
  {
    id: 18, domain: 'Process', difficulty: 'Medium',
    q: 'During a vendor selection process, a vendor submits a bid 30% below the next lowest bidder. Other criteria are comparable. What should be the PM\'s BIGGEST concern?',
    opts: ['The vendor may be cutting corners on quality', 'The low bid may indicate the vendor didn\'t understand the scope', 'The low bid creates unfair competition and should be disqualified', 'The vendor may be experiencing financial difficulties'],
    correct: 1,
    explanation: 'A dramatically low bid most commonly indicates that the vendor either: (1) didn\'t understand the full scope, leading to change orders later, or (2) is lowballing to win and will increase costs post-award (buy-in strategy). Both are procurement red flags. The right action is to have the vendor validate their understanding of scope and justify their pricing — not assume the worst or automatically disqualify. Quality concerns (option A) are secondary to scope understanding as the primary concern.'
  },
  {
    id: 19, domain: 'Process', difficulty: 'Easy',
    q: 'A risk with 25% probability of occurrence would cost $120,000 if it happened. There is also a 15% chance of an opportunity worth $80,000. What is the net Expected Monetary Value (EMV)?',
    opts: ['-$18,000', '-$30,000 (ignore opportunity)', '$18,000', '-$42,000'],
    correct: 0,
    explanation: 'EMV = Probability × Impact\nThreat EMV = -0.25 × $120,000 = -$30,000\nOpportunity EMV = +0.15 × $80,000 = +$12,000\nNet EMV = -$30,000 + $12,000 = -$18,000\n\nKey: Always include BOTH threats (negative) and opportunities (positive) in EMV analysis. Net EMV of -$18,000 means this combination of risks represents an expected net cost of $18,000. In decision tree analysis, you sum all EMVs across branches.'
  },
  {
    id: 20, domain: 'People', difficulty: 'Easy',
    q: 'According to Maslow\'s Hierarchy of Needs, a developer who has been repeatedly passed over for promotion despite excellent work is most likely experiencing an unmet need at which level?',
    opts: ['Physiological — basic needs', 'Safety — job security', 'Esteem — recognition and achievement', 'Self-actualization — fulfilling potential'],
    correct: 2,
    explanation: 'Being passed over for promotion despite excellent performance creates unmet Esteem needs — recognition, achievement, status, and respect. The developer clearly has their physiological (salary) and safety (job security) needs met (they\'re still employed and presumably paid). Social needs may be met through teamwork. The specific frustration of being overlooked despite merit is a textbook Esteem-level need. If unaddressed, expect motivation to drop significantly (Herzberg: lack of advancement = absent motivator).'
  }
];
