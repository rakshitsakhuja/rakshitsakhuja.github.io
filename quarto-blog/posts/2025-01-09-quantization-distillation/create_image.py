import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
from matplotlib.patches import FancyBboxPatch
import matplotlib.patches as mpatches

# Set style
plt.style.use('seaborn-v0_8-whitegrid')
sns.set_palette("husl")

# Create figure with subplots
fig = plt.figure(figsize=(16, 10))
gs = fig.add_gridspec(3, 4, height_ratios=[1, 1, 1], width_ratios=[1, 1, 1, 1])

# Main title
fig.suptitle('Model Optimization: Quantization & Knowledge Distillation', 
             fontsize=24, fontweight='bold', y=0.95)

# 1. Quantization visualization (top left)
ax1 = fig.add_subplot(gs[0, :2])
precision_levels = ['FP32', 'FP16', 'INT8', 'INT4']
model_sizes = [100, 50, 25, 12.5]
colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']

bars = ax1.bar(precision_levels, model_sizes, color=colors)
ax1.set_title('Quantization: Model Size Reduction', fontsize=16, fontweight='bold')
ax1.set_ylabel('Model Size (MB)', fontsize=12)
ax1.set_xlabel('Precision Level', fontsize=12)

# Add value labels on bars
for bar, size in zip(bars, model_sizes):
    height = bar.get_height()
    ax1.text(bar.get_x() + bar.get_width()/2., height + 1,
             f'{size} MB', ha='center', va='bottom', fontweight='bold')

# 2. Knowledge Distillation diagram (top right)
ax2 = fig.add_subplot(gs[0, 2:])
ax2.set_xlim(0, 10)
ax2.set_ylim(0, 6)
ax2.axis('off')
ax2.set_title('Knowledge Distillation Process', fontsize=16, fontweight='bold')

# Teacher model (large box)
teacher_box = FancyBboxPatch((0.5, 3.5), 3, 1.5, 
                             boxstyle="round,pad=0.1", 
                             facecolor='#ff6b6b', alpha=0.7)
ax2.add_patch(teacher_box)
ax2.text(2, 4.25, 'Teacher Model\n(Large & Accurate)', ha='center', va='center', 
         fontweight='bold', fontsize=10)

# Student model (smaller box)
student_box = FancyBboxPatch((6, 3.5), 2.5, 1.5, 
                             boxstyle="round,pad=0.1", 
                             facecolor='#4ecdc4', alpha=0.7)
ax2.add_patch(student_box)
ax2.text(7.25, 4.25, 'Student Model\n(Small & Fast)', ha='center', va='center', 
         fontweight='bold', fontsize=10)

# Arrow for knowledge transfer
ax2.annotate('', xy=(5.8, 4.25), xytext=(3.7, 4.25),
             arrowprops=dict(arrowstyle='->', lw=3, color='#333'))
ax2.text(4.75, 4.6, 'Knowledge\nTransfer', ha='center', va='center', 
         fontweight='bold', fontsize=9)

# Data input
ax2.text(2, 2.5, 'Training Data', ha='center', va='center', 
         fontweight='bold', fontsize=10)
ax2.annotate('', xy=(2, 3.3), xytext=(2, 2.8),
             arrowprops=dict(arrowstyle='->', lw=2, color='#333'))

# 3. Performance comparison (middle row)
ax3 = fig.add_subplot(gs[1, :2])
methods = ['Original', 'Quantized', 'Distilled', 'Quantized +\nDistilled']
accuracy = [95.2, 94.1, 94.8, 93.5]
inference_time = [100, 45, 70, 30]

x = np.arange(len(methods))
width = 0.35

bars1 = ax3.bar(x - width/2, accuracy, width, label='Accuracy (%)', color='#45b7d1', alpha=0.8)
bars2 = ax3.bar(x + width/2, inference_time, width, label='Inference Time (ms)', color='#96ceb4', alpha=0.8)

ax3.set_xlabel('Optimization Method', fontsize=12)
ax3.set_ylabel('Performance Metrics', fontsize=12)
ax3.set_title('Performance Trade-offs', fontsize=16, fontweight='bold')
ax3.set_xticks(x)
ax3.set_xticklabels(methods)
ax3.legend()

# Add value labels
for bar in bars1:
    height = bar.get_height()
    ax3.text(bar.get_x() + bar.get_width()/2., height + 0.5,
             f'{height}%', ha='center', va='bottom', fontsize=9)

for bar in bars2:
    height = bar.get_height()
    ax3.text(bar.get_x() + bar.get_width()/2., height + 1,
             f'{height}ms', ha='center', va='bottom', fontsize=9)

# 4. Memory usage comparison (middle right)
ax4 = fig.add_subplot(gs[1, 2:])
sizes = [30, 70]  # percentages for pie chart
labels = ['Optimized Model', 'Original Model Memory Saved']
colors = ['#45b7d1', '#e8f4fd']
explode = (0.05, 0)

wedges, texts, autotexts = ax4.pie(sizes, explode=explode, labels=labels, colors=colors,
                                   autopct='%1.1f%%', shadow=True, startangle=90)
ax4.set_title('Memory Usage Reduction', fontsize=16, fontweight='bold')

# 5. Production metrics (bottom row)
ax5 = fig.add_subplot(gs[2, :])
metrics = ['Model Size\n(MB)', 'Inference Time\n(ms)', 'Memory Usage\n(GB)', 'Throughput\n(req/sec)']
original_vals = [120, 150, 4.5, 100]
optimized_vals = [35, 45, 1.2, 350]

x = np.arange(len(metrics))
width = 0.35

bars1 = ax5.bar(x - width/2, original_vals, width, label='Original Model', 
                color='#ff6b6b', alpha=0.8)
bars2 = ax5.bar(x + width/2, optimized_vals, width, label='Optimized Model', 
                color='#4ecdc4', alpha=0.8)

ax5.set_ylabel('Value', fontsize=12)
ax5.set_xlabel('Production Metrics', fontsize=12)
ax5.set_title('Production Deployment Comparison', fontsize=16, fontweight='bold')
ax5.set_xticks(x)
ax5.set_xticklabels(metrics)
ax5.legend()

# Add improvement percentages
improvements = [(orig - opt) / orig * 100 for orig, opt in zip(original_vals, optimized_vals)]
for i, improvement in enumerate(improvements):
    if improvement > 0:
        ax5.text(i, max(original_vals[i], optimized_vals[i]) + max(original_vals) * 0.05,
                 f'-{improvement:.0f}%', ha='center', va='bottom', 
                 fontweight='bold', color='green', fontsize=10)
    else:
        ax5.text(i, max(original_vals[i], optimized_vals[i]) + max(original_vals) * 0.05,
                 f'+{abs(improvement):.0f}%', ha='center', va='bottom', 
                 fontweight='bold', color='green', fontsize=10)

plt.tight_layout()
plt.savefig('quantization_distillation.png', dpi=300, bbox_inches='tight', 
            facecolor='white', edgecolor='none')
plt.show()

print("Blog post image created successfully!")